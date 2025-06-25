@echo off
setlocal EnableDelayedExpansion

:: Video to GIF Converter Script for Windows CMD
:: Usage: convert.bat -i input.mp4 [-h height] [-s speed] [-q quality]

:: Set default values
set "HEIGHT=500"
set "SPEED=1"
set "QUALITY=normal"
set "INPUT_FILE="
set "SCRIPT_NAME=%~n0"

:: Color codes (using PowerShell for colored output)
set "PS_INFO=Write-Host '[INFO]' -ForegroundColor Blue -NoNewline; Write-Host"
set "PS_SUCCESS=Write-Host '[SUCCESS]' -ForegroundColor Green -NoNewline; Write-Host"
set "PS_WARNING=Write-Host '[WARNING]' -ForegroundColor Yellow -NoNewline; Write-Host"
set "PS_ERROR=Write-Host '[ERROR]' -ForegroundColor Red -NoNewline; Write-Host"

:: Function to log info
:log_info
powershell -Command "%PS_INFO% ' %~1'"
goto :eof

:: Function to log success
:log_success
powershell -Command "%PS_SUCCESS% ' %~1'"
goto :eof

:: Function to log warning
:log_warning
powershell -Command "%PS_WARNING% ' %~1'"
goto :eof

:: Function to log error
:log_error
powershell -Command "%PS_ERROR% ' %~1'"
goto :eof

:: Function to show usage
:show_usage
echo Usage: %SCRIPT_NAME%.bat -i input_file [-h height] [-s speed] [-q quality]
echo.
echo Required:
echo   -i input_file    Input video file (mp4, mov, avi, webm, etc.)
echo.
echo Optional:
echo   -h height        Output height in pixels (default: 500)
echo   -s speed         Speed multiplier 1-4 (default: 1)
echo   -q quality       Quality: low, normal, medium, high (default: normal)
echo.
echo Examples:
echo   %SCRIPT_NAME%.bat -i video.mp4
echo   %SCRIPT_NAME%.bat -i video.mov -h 720 -s 2 -q medium
goto :eof

:: Function to check if command exists
:command_exists
where %1 >nul 2>nul
goto :eof

:: Function to check if chocolatey is installed
:check_chocolatey
call :command_exists choco
if !errorlevel! neq 0 (
    call :log_warning "Chocolatey not found. Installing..."
    call :install_chocolatey
)
goto :eof

:: Function to install chocolatey
:install_chocolatey
call :log_info "Installing Chocolatey package manager..."
powershell -Command "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
if !errorlevel! neq 0 (
    call :log_error "Failed to install Chocolatey"
    echo Please install Chocolatey manually from https://chocolatey.org/install
    exit /b 1
)
call :log_success "Chocolatey installed successfully"
:: Refresh environment variables
call refreshenv.cmd 2>nul
goto :eof

:: Function to install ffmpeg
:install_ffmpeg
call :log_info "Installing ffmpeg..."
call :check_chocolatey
choco install ffmpeg -y
if !errorlevel! neq 0 (
    call :log_error "Failed to install ffmpeg"
    exit /b 1
)
call :log_success "ffmpeg installed successfully"
:: Refresh environment variables
call refreshenv.cmd 2>nul
goto :eof

:: Function to install gifsicle
:install_gifsicle
call :log_info "Installing gifsicle..."
call :check_chocolatey
choco install gifsicle -y
if !errorlevel! neq 0 (
    call :log_error "Failed to install gifsicle"
    exit /b 1
)
call :log_success "gifsicle installed successfully"
:: Refresh environment variables
call refreshenv.cmd 2>nul
goto :eof

:: Parse command line arguments
:parse_args
if "%1"=="" goto :done_parsing
if "%1"=="-i" (
    set "INPUT_FILE=%2"
    shift
    shift
    goto :parse_args
)
if "%1"=="-h" (
    set "HEIGHT=%2"
    shift
    shift
    goto :parse_args
)
if "%1"=="-s" (
    set "SPEED=%2"
    shift
    shift
    goto :parse_args
)
if "%1"=="-q" (
    set "QUALITY=%2"
    shift
    shift
    goto :parse_args
)
if "%1"=="--height" (
    set "HEIGHT=%2"
    shift
    shift
    goto :parse_args
)
if "%1"=="--speed" (
    set "SPEED=%2"
    shift
    shift
    goto :parse_args
)
if "%1"=="--quality" (
    set "QUALITY=%2"
    shift
    shift
    goto :parse_args
)
if "%1"=="--help" (
    call :show_usage
    exit /b 0
)
call :log_error "Unknown option: %1"
call :show_usage
exit /b 1

:done_parsing

:: Main script execution starts here
call :parse_args %*

call :log_info "Starting video to GIF conversion..."

:: Validate required arguments
if "%INPUT_FILE%"=="" (
    call :log_error "Input file is required (-i option)"
    call :show_usage
    exit /b 1
)

:: Check if input file exists
if not exist "%INPUT_FILE%" (
    call :log_error "Input file '%INPUT_FILE%' does not exist"
    exit /b 1
)

:: Validate height (basic validation)
if %HEIGHT% LSS 100 (
    call :log_error "Height must be at least 100 pixels"
    exit /b 1
)
if %HEIGHT% GTR 4000 (
    call :log_error "Height must be no more than 4000 pixels"
    exit /b 1
)

:: Validate speed (basic validation - decimal validation is complex in batch)
:: We'll use PowerShell for more complex validation
powershell -Command "if ([decimal]'%SPEED%' -lt 1 -or [decimal]'%SPEED%' -gt 4) { exit 1 }" 2>nul
if !errorlevel! neq 0 (
    call :log_error "Speed must be between 1 and 4"
    exit /b 1
)

:: Validate quality and convert to fps
if "%QUALITY%"=="low" set "FPS=10"
if "%QUALITY%"=="normal" set "FPS=16"
if "%QUALITY%"=="medium" set "FPS=22"
if "%QUALITY%"=="high" set "FPS=28"

if not defined FPS (
    call :log_error "Quality must be one of: low, normal, medium, high"
    exit /b 1
)

:: Convert speed to setpts value using PowerShell
for /f %%i in ('powershell -Command "[math]::Round((1 / [decimal]'%SPEED%'), 2)"') do set "SETPTS=%%i"

call :log_info "Input file: %INPUT_FILE%"
call :log_info "Height: %HEIGHT%px"
call :log_info "Speed: %SPEED%x (setpts: %SETPTS%)"
call :log_info "Quality: %QUALITY% (fps: %FPS%)"

:: Check for ffmpeg
call :log_info "Checking for ffmpeg installation..."
call :command_exists ffmpeg
if !errorlevel! neq 0 (
    call :log_warning "ffmpeg not found. Installing..."
    call :install_ffmpeg
) else (
    call :log_success "ffmpeg is already installed"
)

:: Check for gifsicle
call :log_info "Checking for gifsicle installation..."
call :command_exists gifsicle
if !errorlevel! neq 0 (
    call :log_warning "gifsicle not found. Installing..."
    call :install_gifsicle
) else (
    call :log_success "gifsicle is already installed"
)

:: Generate output filename
for %%f in ("%INPUT_FILE%") do (
    set "OUTPUT_FILE=%%~dpnf.gif"
)

:: Clean up any existing temp files
call :log_info "Cleaning up any existing temporary files..."
if exist "palette.png" del /f "palette.png"
if exist "temp.gif" del /f "temp.gif"

:: Step 1: Generate color palette
call :log_info "Step 1/3: Generating color palette..."
ffmpeg -i "%INPUT_FILE%" -vf "setpts=%SETPTS%*PTS,fps=%FPS%,scale=-2:%HEIGHT%:flags=lanczos,palettegen=stats_mode=diff" -y palette.png

if !errorlevel! neq 0 (
    call :log_error "Failed to generate color palette"
    exit /b 1
)
call :log_success "Color palette generated successfully"

:: Step 2: Generate GIF with palette
call :log_info "Step 2/3: Converting video to GIF..."
ffmpeg -i "%INPUT_FILE%" -i palette.png -filter_complex "[0:v]setpts=%SETPTS%*PTS,fps=%FPS%,scale=-2:%HEIGHT%:flags=lanczos[x];[x][1:v]paletteuse=dither=sierra2_4a" -y temp.gif

if !errorlevel! neq 0 (
    call :log_error "Failed to convert video to GIF"
    if exist "palette.png" del /f "palette.png"
    if exist "temp.gif" del /f "temp.gif"
    exit /b 1
)
call :log_success "GIF conversion completed successfully"

:: Step 3: Optimize GIF
call :log_info "Step 3/3: Optimizing GIF with gifsicle..."
gifsicle -O3 --colors 256 temp.gif -o "%OUTPUT_FILE%"

if !errorlevel! neq 0 (
    call :log_error "Failed to optimize GIF"
    if exist "palette.png" del /f "palette.png"
    if exist "temp.gif" del /f "temp.gif"
    exit /b 1
)
call :log_success "GIF optimization completed successfully"

:: Clean up temporary files
call :log_info "Cleaning up temporary files..."
if exist "palette.png" del /f "palette.png"
if exist "temp.gif" del /f "temp.gif"
call :log_success "Temporary files cleaned up"

:: Get file sizes (using PowerShell for better formatting)
for /f %%i in ('powershell -Command "[math]::Round((Get-Item '%INPUT_FILE%').Length / 1MB, 2)"') do set "INPUT_SIZE=%%i"
for /f %%i in ('powershell -Command "[math]::Round((Get-Item '%OUTPUT_FILE%').Length / 1MB, 2)"') do set "OUTPUT_SIZE=%%i"

call :log_success "Conversion completed successfully!"
call :log_info "Input file: %INPUT_FILE% (%INPUT_SIZE%MB)"
call :log_info "Output file: %OUTPUT_FILE% (%OUTPUT_SIZE%MB)"
call :log_info "Settings used: %HEIGHT%px height, %SPEED%x speed, %QUALITY% quality"

endlocal
