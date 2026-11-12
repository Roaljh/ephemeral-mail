# Ephemeral Mail

An open-source disposable email platform. This repository contains the initial FastAPI backend, React/Vite frontend shell, and local PostgreSQL development setup. Email delivery and inbox functionality are not implemented yet.

## Requirements

- Docker and Docker Compose for the full local stack, or Python 3.11+ for backend-only development.
- Node.js 20+ and npm for the frontend shell.

## Run with Docker Compose

```sh
cp .env.example .env
docker compose up --build
```

The API is available at <http://localhost:8000>, its liveness endpoint at <http://localhost:8000/health>, and interactive API docs at <http://localhost:8000/docs>. PostgreSQL is exposed on port 5432 for local development. The Compose credentials are development-only; change them before using this setup beyond a local machine.

To run the frontend separately:

```sh
cd frontend
npm install
npm run dev
```

## Run backend tests

```sh
cd backend
python -m venv .venv
# Activate the virtual environment, then:
pip install -r requirements.txt
python -m pytest
```

The health endpoint does not require a running database. Database access is configured with `DATABASE_URL`; copy `.env.example` to `.env` for local configuration. No tables are created yet.

See [docs/architecture.md](docs/architecture.md) for initial boundaries and security considerations.
