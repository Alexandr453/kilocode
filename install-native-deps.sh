#!/bin/bash
# Script to install native dependencies for native-keymap and other native modules

set -e

echo "📦 Installing native dependencies for native-keymap..."

# Install required system packages
apt-get update && apt-get install -y \
  libxkbfile-dev \
  libx11-dev \
  libxkbcommon-dev \
  libxkbcommon-x11-dev \
  libxtst-dev \
  libnss3-dev \
  libatk-bridge2.0-dev \
  libgtk-3-dev \
  libasound2-dev \
  libdrm-dev \
  libgbm-dev \
  libxrandr-dev \
  libxinerama-dev \
  libxcursor-dev \
  libxi-dev \
  libxss-dev \
  pkg-config \
  build-essential \
  python3 \
  make \
  g++ \
  && rm -rf /var/lib/apt/lists/*

echo "✅ Native dependencies installed"

# Verify pkg-config can find xkbfile
if pkg-config --exists xkbfile; then
    echo "✅ xkbfile found in pkg-config"
else
    echo "⚠️  xkbfile not found in pkg-config, checking paths..."
    find /usr -name "*xkbfile*pc" 2>/dev/null || echo "No .pc files found"
fi

# Set PKG_CONFIG_PATH if needed
export PKG_CONFIG_PATH="/usr/lib/x86_64-linux-gnu/pkgconfig:$PKG_CONFIG_PATH"
echo "PKG_CONFIG_PATH set to: $PKG_CONFIG_PATH"