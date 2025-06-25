#Requires -Version 5.0

<#
.SYNOPSIS
    Video to GIF Converter Script for Windows PowerShell

.DESCRIPTION
    Converts video files to animated GIFs using ffmpeg and gifsicle

.PARAMETER InputFile
    Input video file (required)

.PARAMETER Height
    Output height in pixels (default: 500)

.PARAMETER Speed
    Speed multiplier 1-4 (default: 1)

.PARAMETER Quality
    Quality setting: low, normal, medium, high (default: normal)

.EXAMPLE
    .\convert.ps1 -InputFile "video.mp4"
    .\convert.ps1 -InputFile "video.mov" -Height 720 -Speed 2 -Quality medium
#>

param(
    [Parameter(Mandatory=$true, HelpMessage="Input video file")]
    [Alias("i")]
    [string]$InputFile,
    
    [Parameter(Mandatory=$false)]
    [Alias("h")]
    [int]$Height = 500,
    
    [Parameter(Mandatory=$false)]
    [Alias("s")]
    [decimal]$Speed = 1,
    
    [Parameter(Mandatory=$false)]
    [Alias("q")]
    [ValidateSet("low", "normal", "medium", "high")]
    [string]$Quality = "normal"
)

# Function to write colored output
function Write-LogInfo {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-LogSuccess {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-LogWarning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-LogError {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Function to check if command exists
function Test-CommandExists {
    param([string]$Command)
    $null = Get-Command $Command -ErrorAction SilentlyContinue
    return $?
}

# Function to check if chocolatey is installed
function Test-ChocolateyInstalled {
    return Test-CommandExists "choco"
}

# Function to install chocolatey
function Install-Chocolatey {
    Write-LogInfo "Installing Chocolatey package manager..."
    try {
        Set-ExecutionPolicy Bypass -Scope Process -Force
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
        Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        Write-LogSuccess "Chocolatey installed successfully"
        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    }
    catch {
        Write-LogError "Failed to install Chocolatey: $($_.Exception.Message)"
        Write-LogError "Please install Chocolatey manually from https://chocolatey.org/install"
        exit 1
    }
}

# Function to install ffmpeg
function Install-FFmpeg {
    Write-LogInfo "Installing ffmpeg..."
    try {
        if (-not (Test-ChocolateyInstalled)) {
            Install-Chocolatey
        }
        choco install ffmpeg -y
        Write-LogSuccess "ffmpeg installed successfully"
        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    }
    catch {
        Write-LogError "Failed to install ffmpeg: $($_.Exception.Message)"
        exit 1
    }
}

# Function to install gifsicle
function Install-Gifsicle {
    Write-LogInfo "Installing gifsicle..."
    try {
        if (-not (Test-ChocolateyInstalled)) {
            Install-Chocolatey
        }
        choco install gifsicle -y
        Write-LogSuccess "gifsicle installed successfully"
        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    }
    catch {
        Write-LogError "Failed to install gifsicle: $($_.Exception.Message)"
        exit 1
    }
}

# Main script execution
try {
    Write-LogInfo "Starting video to GIF conversion..."
    
    # Validate input file
    if (-not (Test-Path $InputFile)) {
        Write-LogError "Input file '$InputFile' does not exist"
        exit 1
    }
    
    # Validate height
    if ($Height -lt 100 -or $Height -gt 4000) {
        Write-LogError "Height must be between 100 and 4000 pixels"
        exit 1
    }
    
    # Validate speed
    if ($Speed -lt 1 -or $Speed -gt 4) {
        Write-LogError "Speed must be between 1 and 4"
        exit 1
    }
    
    # Convert quality to fps
    switch ($Quality) {
        "low"    { $FPS = 10 }
        "normal" { $FPS = 16 }
        "medium" { $FPS = 22 }
        "high"   { $FPS = 28 }
    }
    
    # Convert speed to setpts value
    $SetPts = [math]::Round((1 / $Speed), 2)
    
    Write-LogInfo "Input file: $InputFile"
    Write-LogInfo "Height: ${Height}px"
    Write-LogInfo "Speed: ${Speed}x (setpts: $SetPts)"
    Write-LogInfo "Quality: $Quality (fps: $FPS)"
    
    # Check for ffmpeg
    Write-LogInfo "Checking for ffmpeg installation..."
    if (-not (Test-CommandExists "ffmpeg")) {
        Write-LogWarning "ffmpeg not found. Installing..."
        Install-FFmpeg
    } else {
        Write-LogSuccess "ffmpeg is already installed"
    }
    
    # Check for gifsicle
    Write-LogInfo "Checking for gifsicle installation..."
    if (-not (Test-CommandExists "gifsicle")) {
        Write-LogWarning "gifsicle not found. Installing..."
        Install-Gifsicle
    } else {
        Write-LogSuccess "gifsicle is already installed"
    }
    
    # Generate output filename
    $OutputFile = [System.IO.Path]::ChangeExtension($InputFile, ".gif")
    
    # Clean up any existing temp files
    Write-LogInfo "Cleaning up any existing temporary files..."
    if (Test-Path "palette.png") { Remove-Item "palette.png" -Force }
    if (Test-Path "temp.gif") { Remove-Item "temp.gif" -Force }
    
    # Step 1: Generate color palette
    Write-LogInfo "Step 1/3: Generating color palette..."
    $paletteCmd = "ffmpeg -i `"$InputFile`" -vf `"setpts=${SetPts}*PTS,fps=${FPS},scale=-2:${Height}:flags=lanczos,palettegen=stats_mode=diff`" -y palette.png"
    $result = Invoke-Expression $paletteCmd
    
    if ($LASTEXITCODE -eq 0) {
        Write-LogSuccess "Color palette generated successfully"
    } else {
        Write-LogError "Failed to generate color palette"
        exit 1
    }
    
    # Step 2: Generate GIF with palette
    Write-LogInfo "Step 2/3: Converting video to GIF..."
    $gifCmd = "ffmpeg -i `"$InputFile`" -i palette.png -filter_complex `"[0:v]setpts=${SetPts}*PTS,fps=${FPS},scale=-2:${Height}:flags=lanczos[x];[x][1:v]paletteuse=dither=sierra2_4a`" -y temp.gif"
    $result = Invoke-Expression $gifCmd
    
    if ($LASTEXITCODE -eq 0) {
        Write-LogSuccess "GIF conversion completed successfully"
    } else {
        Write-LogError "Failed to convert video to GIF"
        if (Test-Path "palette.png") { Remove-Item "palette.png" -Force }
        if (Test-Path "temp.gif") { Remove-Item "temp.gif" -Force }
        exit 1
    }
    
    # Step 3: Optimize GIF
    Write-LogInfo "Step 3/3: Optimizing GIF with gifsicle..."
    $optimizeCmd = "gifsicle -O3 --colors 256 temp.gif -o `"$OutputFile`""
    $result = Invoke-Expression $optimizeCmd
    
    if ($LASTEXITCODE -eq 0) {
        Write-LogSuccess "GIF optimization completed successfully"
    } else {
        Write-LogError "Failed to optimize GIF"
        if (Test-Path "palette.png") { Remove-Item "palette.png" -Force }
        if (Test-Path "temp.gif") { Remove-Item "temp.gif" -Force }
        exit 1
    }
    
    # Clean up temporary files
    Write-LogInfo "Cleaning up temporary files..."
    if (Test-Path "palette.png") { Remove-Item "palette.png" -Force }
    if (Test-Path "temp.gif") { Remove-Item "temp.gif" -Force }
    Write-LogSuccess "Temporary files cleaned up"
    
    # Get file sizes
    $InputSize = [math]::Round((Get-Item $InputFile).Length / 1MB, 2)
    $OutputSize = [math]::Round((Get-Item $OutputFile).Length / 1MB, 2)
    
    Write-LogSuccess "Conversion completed successfully!"
    Write-LogInfo "Input file: $InputFile (${InputSize}MB)"
    Write-LogInfo "Output file: $OutputFile (${OutputSize}MB)"
    Write-LogInfo "Settings used: ${Height}px height, ${Speed}x speed, $Quality quality"
    
} catch {
    Write-LogError "An unexpected error occurred: $($_.Exception.Message)"
    # Clean up on error
    if (Test-Path "palette.png") { Remove-Item "palette.png" -Force }
    if (Test-Path "temp.gif") { Remove-Item "temp.gif" -Force }
    exit 1
}
