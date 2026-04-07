#!/bin/bash
# Create a simple 1x1 PNG using ImageMagick or convert
if command -v convert &> /dev/null; then
    # Create placeholder images for icons
    mkdir -p public/icons
    mkdir -p public/images
    
    # Create placeholder PNG icons (48x48 with colored backgrounds)
    convert -size 48x48 xc:#7CB3FF -alpha set public/icons/youtube.png
    convert -size 48x48 xc:#4A8BFF -alpha set public/icons/github.png
    convert -size 48x48 xc:#000000 -alpha set public/icons/tiktok.png
    convert -size 48x48 xc:#cccccc -alpha set public/icons/blog.png
    convert -size 48x48 xc:#ffffff -alpha set public/icons/x.png
    convert -size 48x48 xc:#5865F2 -alpha set public/icons/discord.png
    
    # Create placeholder profile image (224x224)
    convert -size 224x224 xc:#E6E1DC -alpha set public/images/profile.jpg
    
    echo "Placeholder images created!"
else
    echo "ImageMagick not found. Installing with homebrew..."
    brew install imagemagick
    # Try again after install
fi
