#!/bin/bash

# Video to GIF Converter Script
# Usage: ./convert.sh -i input.mp4 [-h height] [-s speed] [-q quality]

set -e  # Exit on any error

# Default values
HEIGHT=500
SPEED=1
QUALITY="normal"
INPUT_FILE=""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to detect package manager and install ffmpeg
install_ffmpeg() {
    log_info "Installing ffmpeg..."
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command_exists brew; then
            brew install ffmpeg
        else
            log_error "Homebrew not found. Please install Homebrew first: https://brew.sh/"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command_exists apt-get; then
            sudo apt-get update && sudo apt-get install -y ffmpeg
        elif command_exists yum; then
            sudo yum install -y ffmpeg
        elif command_exists dnf; then
            sudo dnf install -y ffmpeg
        elif command_exists pacman; then
            sudo pacman -S ffmpeg
        else
            log_error "No supported package manager found. Please install ffmpeg manually."
            exit 1
        fi
    else
        log_error "Unsupported operating system. Please install ffmpeg manually."
        exit 1
    fi
}

# Function to install gifsicle
install_gifsicle() {
    log_info "Installing gifsicle..."
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command_exists brew; then
            brew install gifsicle
        else
            log_error "Homebrew not found. Please install Homebrew first: https://brew.sh/"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command_exists apt-get; then
            sudo apt-get update && sudo apt-get install -y gifsicle
        elif command_exists yum; then
            sudo yum install -y gifsicle
        elif command_exists dnf; then
            sudo dnf install -y gifsicle
        elif command_exists pacman; then
            sudo pacman -S gifsicle
        else
            log_error "No supported package manager found. Please install gifsicle manually."
            exit 1
        fi
    else
        log_error "Unsupported operating system. Please install gifsicle manually."
        exit 1
    fi
}

# Function to show usage
show_usage() {
    echo "Usage: $0 -i input_file [-h height] [-s speed] [-q quality]"
    echo ""
    echo "Required:"
    echo "  -i input_file    Input video file (mp4, mov, avi, webm, etc.)"
    echo ""
    echo "Optional:"
    echo "  -h, --height     Output height in pixels (default: 500)"
    echo "  -s, --speed      Speed multiplier 1-4 (default: 1)"
    echo "  -q, --quality    Quality: low, normal, medium, high (default: normal)"
    echo ""
    echo "Examples:"
    echo "  $0 -i video.mp4"
    echo "  $0 -i video.mov -h 720 -s 2 -q medium"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -i)
            INPUT_FILE="$2"
            shift 2
            ;;
        -h|--height)
            HEIGHT="$2"
            shift 2
            ;;
        -s|--speed)
            SPEED="$2"
            shift 2
            ;;
        -q|--quality)
            QUALITY="$2"
            shift 2
            ;;
        --help)
            show_usage
            exit 0
            ;;
        *)
            log_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
done

# Validate required arguments
if [[ -z "$INPUT_FILE" ]]; then
    log_error "Input file is required (-i option)"
    show_usage
    exit 1
fi

# Check if input file exists
if [[ ! -f "$INPUT_FILE" ]]; then
    log_error "Input file '$INPUT_FILE' does not exist"
    exit 1
fi

# Validate height
if ! [[ "$HEIGHT" =~ ^[0-9]+$ ]] || [[ "$HEIGHT" -lt 100 ]] || [[ "$HEIGHT" -gt 4000 ]]; then
    log_error "Height must be a number between 100 and 4000"
    exit 1
fi

# Validate speed
if ! [[ "$SPEED" =~ ^[0-9]*\.?[0-9]+$ ]] || (( $(echo "$SPEED < 1" | bc -l) )) || (( $(echo "$SPEED > 4" | bc -l) )); then
    log_error "Speed must be a number between 1 and 4"
    exit 1
fi

# Validate quality and convert to fps
case "$QUALITY" in
    low)
        FPS=10
        ;;
    normal)
        FPS=16
        ;;
    medium)
        FPS=22
        ;;
    high)
        FPS=28
        ;;
    *)
        log_error "Quality must be one of: low, normal, medium, high"
        exit 1
        ;;
esac

# Convert speed to setpts value
SETPTS=$(echo "scale=2; 1 / $SPEED" | bc -l)

log_info "Starting video to GIF conversion..."
log_info "Input file: $INPUT_FILE"
log_info "Height: ${HEIGHT}px"
log_info "Speed: ${SPEED}x (setpts: $SETPTS)"
log_info "Quality: $QUALITY (fps: $FPS)"

# Check for ffmpeg
log_info "Checking for ffmpeg installation..."
if ! command_exists ffmpeg; then
    log_warning "ffmpeg not found. Installing..."
    install_ffmpeg
    log_success "ffmpeg installed successfully"
else
    log_success "ffmpeg is already installed"
fi

# Check for gifsicle
log_info "Checking for gifsicle installation..."
if ! command_exists gifsicle; then
    log_warning "gifsicle not found. Installing..."
    install_gifsicle
    log_success "gifsicle installed successfully"
else
    log_success "gifsicle is already installed"
fi

# Generate output filename
OUTPUT_FILE="${INPUT_FILE%.*}.gif"

# Clean up any existing temp files
log_info "Cleaning up any existing temporary files..."
rm -f palette.png temp.gif

# Step 1: Generate color palette
log_info "Step 1/3: Generating color palette..."
ffmpeg -i "$INPUT_FILE" -vf "setpts=${SETPTS}*PTS,fps=${FPS},scale=-2:${HEIGHT}:flags=lanczos,palettegen=stats_mode=diff" -y palette.png

if [[ $? -eq 0 ]]; then
    log_success "Color palette generated successfully"
else
    log_error "Failed to generate color palette"
    exit 1
fi

# Step 2: Generate GIF with palette
log_info "Step 2/3: Converting video to GIF..."
ffmpeg -i "$INPUT_FILE" -i palette.png -filter_complex "[0:v]setpts=${SETPTS}*PTS,fps=${FPS},scale=-2:${HEIGHT}:flags=lanczos[x];[x][1:v]paletteuse=dither=sierra2_4a" -y temp.gif

if [[ $? -eq 0 ]]; then
    log_success "GIF conversion completed successfully"
else
    log_error "Failed to convert video to GIF"
    rm -f palette.png temp.gif
    exit 1
fi

# Step 3: Optimize GIF
log_info "Step 3/3: Optimizing GIF with gifsicle..."
gifsicle -O3 --colors 256 temp.gif -o "$OUTPUT_FILE"

if [[ $? -eq 0 ]]; then
    log_success "GIF optimization completed successfully"
else
    log_error "Failed to optimize GIF"
    rm -f palette.png temp.gif
    exit 1
fi

# Clean up temporary files
log_info "Cleaning up temporary files..."
rm -f palette.png temp.gif
log_success "Temporary files cleaned up"

# Get file sizes
INPUT_SIZE=$(du -h "$INPUT_FILE" | cut -f1)
OUTPUT_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)

log_success "Conversion completed successfully!"
log_info "Input file: $INPUT_FILE ($INPUT_SIZE)"
log_info "Output file: $OUTPUT_FILE ($OUTPUT_SIZE)"
log_info "Settings used: ${HEIGHT}px height, ${SPEED}x speed, $QUALITY quality"
