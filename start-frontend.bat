@echo off
title Crave Foodie Web Application
cd /d "%~dp0froentend"
echo ===================================================
echo   Starting Crave Foodie Frontend (React + Vite)...
echo   Customer App: http://localhost:3000
echo   Admin Portal: http://localhost:3000/#admin
echo ===================================================
npm.cmd run dev
pause
