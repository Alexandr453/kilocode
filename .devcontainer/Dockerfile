# Kilo Code Development Container
# Based on flake.nix dependencies for standardized development environment

# Use official Node.js image matching .nvmrc version
FROM node:20.20.0-bullseye

# Install system dependencies (matching flake.nix packages)
RUN apt-get update && apt-get install -y \
  git \
  curl \
  wget \
  libnotify-bin \
  build-essential \
  python3 \
  ca-certificates \
  gnupg \
  lsb-release \
  && rm -rf /var/lib/apt/lists/*

  # Установка Git LFS
RUN curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash \
  && apt-get install -y git-lfs \
  && git lfs install \
  && rm -rf /var/lib/apt/lists/*

# Установка JDK 21 из репозитория Adoptium (Eclipse Temurin)
# Это необходимо, так как в Debian 11 (bullseye) нет openjdk-21-jdk в стандартных репозиториях [citation:1][citation:3]
RUN apt-get update && apt-get install -y \
  wget \
  apt-transport-https \
  && wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | tee /etc/apt/trusted.gpg.d/adoptium.asc \
  && echo "deb https://packages.adoptium.net/artifactory/deb bullseye main" | tee /etc/apt/sources.list.d/adoptium.list \
  && apt-get update \
  && apt-get install -y temurin-21-jdk \
  && rm -rf /var/lib/apt/lists/*

# Установка dos2unix для конвертации окончаний строк
RUN apt-get update && apt-get install -y dos2unix \
    && rm -rf /var/lib/apt/lists/*

# Enable corepack for pnpm (matching package.json version)
RUN corepack enable && corepack prepare pnpm@10.8.1 --activate

# Set working directory
WORKDIR /workspace

# Set environment variables
ENV NODE_ENV=development
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV JAVA_HOME="/usr/lib/jvm/temurin-21-jdk-amd64"
ENV PATH="$JAVA_HOME/bin:$PATH"

# Create pnpm directories
RUN mkdir -p /root/.local/share/pnpm

# Verify Java installation
RUN java -version && javac -version

# Verify Git LFS installation
RUN git lfs version

# Default command
CMD ["bash"]