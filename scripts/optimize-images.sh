#!/bin/bash

# Image Optimization Script for Portfolio
# Compresses PNG/JPG and generates WebP alternatives

set -e

SOURCE_DIR="./public/images"
OUTPUT_DIR="./public/images"
QUALITY_JPG=80
QUALITY_PNG=75

echo "=== Portfolio Image Optimization Script ==="
echo "Source: $SOURCE_DIR"
echo "Quality: PNG=$QUALITY_PNG%, JPG=$QUALITY_JPG%"
echo ""

# Check if ImageMagick is available
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Install with:"
    echo "   macOS: brew install imagemagick"
    echo "   Ubuntu: sudo apt-get install imagemagick"
    echo "   Windows: choco install imagemagick"
    exit 1
fi

# Check if cwebp is available for WebP
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. WebP conversion skipped."
    echo "   Install with: brew install webp (macOS)"
    SKIP_WEBP=1
else
    SKIP_WEBP=0
fi

TOTAL_BEFORE=0
TOTAL_AFTER=0

# Process each image
for file in "$SOURCE_DIR"/*.{png,jpg,jpeg}; do
    [ -e "$file" ] || continue
    
    filename=$(basename "$file")
    ext="${filename##*.}"
    name="${filename%.*}"
    
    # Get original size
    orig_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    orig_size_mb=$(echo "scale=2; $orig_size / 1024 / 1024" | bc)
    
    TOTAL_BEFORE=$((TOTAL_BEFORE + orig_size))
    
    echo "Processing: $filename ($orig_size_mb MB)"
    
    # Compress PNG
    if [ "$ext" = "png" ]; then
        temp_file="${OUTPUT_DIR}/${name}_temp.png"
        convert "$file" -quality $QUALITY_PNG "$temp_file" 2>/dev/null
        mv "$temp_file" "$file"
        
        # Generate WebP
        if [ $SKIP_WEBP -eq 0 ]; then
            webp_file="${OUTPUT_DIR}/${name}.webp"
            cwebp -q 75 "$file" -o "$webp_file" 2>/dev/null
            echo "  ✓ WebP: $webp_file"
        fi
    fi
    
    # Compress JPG
    if [ "$ext" = "jpg" ] || [ "$ext" = "jpeg" ]; then
        temp_file="${OUTPUT_DIR}/${name}_temp.jpg"
        convert "$file" -quality $QUALITY_JPG "$temp_file" 2>/dev/null
        mv "$temp_file" "$file"
        
        # Generate WebP
        if [ $SKIP_WEBP -eq 0 ]; then
            webp_file="${OUTPUT_DIR}/${name}.webp"
            cwebp -q 75 "$file" -o "$webp_file" 2>/dev/null
            echo "  ✓ WebP: $webp_file"
        fi
    fi
    
    # Get new size
    new_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    new_size_mb=$(echo "scale=2; $new_size / 1024 / 1024" | bc)
    reduction=$(echo "scale=1; (1 - $new_size / $orig_size) * 100" | bc)
    
    TOTAL_AFTER=$((TOTAL_AFTER + new_size))
    
    echo "  Before: $orig_size_mb MB | After: $new_size_mb MB | Reduction: $reduction%"
    echo ""
done

total_before_mb=$(echo "scale=2; $TOTAL_BEFORE / 1024 / 1024" | bc)
total_after_mb=$(echo "scale=2; $TOTAL_AFTER / 1024 / 1024" | bc)
total_reduction=$(echo "scale=1; (1 - $TOTAL_AFTER / $TOTAL_BEFORE) * 100" | bc)

echo "=== SUMMARY ==="
echo "Total Before: $total_before_mb MB"
echo "Total After: $total_after_mb MB"
echo "Total Reduction: $total_reduction%"
echo "Space Saved: $(echo "scale=2; ($TOTAL_BEFORE - $TOTAL_AFTER) / 1024 / 1024" | bc) MB"
