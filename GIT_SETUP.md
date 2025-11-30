# Git Setup and Upload Guide

## Step 1: Install Git (if not already installed)

If Git is not installed on your system, download and install it:

1. **Download Git for Windows**: https://git-scm.com/download/win
2. **Run the installer** and follow the setup wizard
3. **Restart your terminal/command prompt** after installation

## Step 2: Verify Git Installation

Open a new terminal/command prompt and run:
```bash
git --version
```

You should see the Git version number if it's installed correctly.

## Step 3: Navigate to Your Project

```bash
cd "C:\Users\Arbaz PC\Downloads\emaar-new"
```

## Step 4: Initialize Git Repository

```bash
git init
```

## Step 5: Configure Git (First Time Only)

If this is your first time using Git, configure your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 6: Add All Files to Git

```bash
git add .
```

## Step 7: Create Initial Commit

```bash
git commit -m "Initial commit: Emaar real estate property finder application"
```

## Step 8: Create a Repository on GitHub

1. Go to https://github.com
2. Sign in to your account (or create one if you don't have it)
3. Click the **"+"** icon in the top right corner
4. Select **"New repository"**
5. Enter a repository name (e.g., `emaar-real-estate` or `emaar-frontend`)
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 9: Add Remote Repository

After creating the repository on GitHub, you'll see a page with setup instructions. Copy the repository URL (it will look like: `https://github.com/yourusername/repository-name.git`)

Then run:

```bash
git remote add origin https://github.com/yourusername/repository-name.git
```

Replace `yourusername` and `repository-name` with your actual GitHub username and repository name.

## Step 10: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

You'll be prompted for your GitHub username and password (or personal access token).

### If You Need a Personal Access Token

If GitHub asks for a token instead of password:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Emaar Project")
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token and use it as your password when pushing

## Alternative: Using GitHub Desktop

If you prefer a graphical interface:

1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Browse to your project folder: `C:\Users\Arbaz PC\Downloads\emaar-new`
5. Click "Publish repository" to upload to GitHub

## Quick Command Summary

Once Git is installed, you can run these commands in sequence:

```bash
# Navigate to project
cd "C:\Users\Arbaz PC\Downloads\emaar-new"

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Emaar real estate property finder application"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Troubleshooting

### "Git is not recognized"
- Make sure Git is installed
- Restart your terminal after installation
- Check if Git is in your system PATH

### "Authentication failed"
- Use a Personal Access Token instead of password
- Make sure you have the correct repository URL

### "Repository not found"
- Verify the repository URL is correct
- Make sure you have access to the repository
- Check if the repository exists on GitHub

### "Permission denied"
- Verify your GitHub credentials
- Check if you have write access to the repository

## Files Included in Repository

The following files will be uploaded:
- All source code (app/, components/, hooks/, lib/)
- Configuration files (package.json, tsconfig.json, next.config.mjs)
- README.md (project documentation)
- DEPLOYMENT.md (deployment guide)
- .gitignore (excludes node_modules, .next, etc.)
- .htaccess (for cPanel deployment)

The following files will be excluded (via .gitignore):
- node_modules/
- .next/
- out/
- .env files
- IDE configuration files

