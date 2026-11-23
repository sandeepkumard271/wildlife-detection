@echo off
title Upload WildTrap-50 to GitHub
echo =======================================================================
echo             WildTrap-50: 1-Click GitHub Repository Uploader
echo =======================================================================
echo.
echo The local git repository and files are already committed and ready!
echo.
echo Please enter your GitHub Repository URL.
echo Example: https://github.com/your-username/wildtrap-50.git
echo.
set /p REPO_URL="Enter your GitHub Repository URL: "

if "%REPO_URL%"=="" (
    echo Error: No URL provided. Exiting.
    pause
    exit /b
)

echo.
echo Linking to: %REPO_URL% ...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Pushing project files to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================================
    echo SUCCESS! Your project has been uploaded to GitHub!
    echo.
    echo To make your website live worldwide:
    echo 1. Open your repository on GitHub.
    echo 2. Click Settings -> Pages.
    echo 3. Under Branch, select 'main' and '/ (root)', then click Save.
    echo 4. Your site will be online in ~1 minute!
    echo =======================================================================
) else (
    echo.
    echo Note: If prompted to sign in, please complete the GitHub login window.
)

pause
