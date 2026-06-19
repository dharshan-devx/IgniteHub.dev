@echo off
echo Starting IgniteHub Development Servers...

echo [1/2] Starting FastAPI Backend...
start "IgniteHub Backend" cmd /k "cd backend && call venv\Scripts\activate && uvicorn app.main:app --reload"

echo [2/2] Starting Next.js Frontend...
start "IgniteHub Frontend" cmd /k "cd frontend && npm run dev"

echo Both servers are starting in new windows.
echo Backend will be available at http://127.0.0.1:8000
echo Frontend will be available at http://localhost:3000
