#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Font files to download
FONT_FILES=(
  "Metropolis-Black.woff2"
  "Metropolis-BlackItalic.woff2"
  "Metropolis-Bold.woff2"
  "Metropolis-BoldItalic.woff2"
  "Metropolis-ExtraBold.woff2"
  "Metropolis-ExtraBoldItalic.woff2"
  "Metropolis-ExtraLight.woff2"
  "Metropolis-ExtraLightItalic.woff2"
  "Metropolis-Light.woff2"
  "Metropolis-LightItalic.woff2"
  "Metropolis-Medium.woff2"
  "Metropolis-MediumItalic.woff2"
  "Metropolis-Regular.woff2"
  "Metropolis-RegularItalic.woff2"
  "Metropolis-SemiBold.woff2"
  "Metropolis-SemiBoldItalic.woff2"
  "Metropolis-Thin.woff2"
  "Metropolis-ThinItalic.woff2"
)

# GitHub raw content base URL
BASE_URL="https://raw.githubusercontent.com/mizphses/Metropolis/master/Webfonts/WOFF2"

# Download each font file
for font in "${FONT_FILES[@]}"; do
  echo "Downloading $font..."
  curl -L -o "public/fonts/$font" "$BASE_URL/$font"
done

echo "All fonts downloaded successfully!"