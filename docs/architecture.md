# Architecture

The initial system separates the browser client (`frontend/`), HTTP API (`backend/app/api/`), shared configuration and database setup (`backend/app/core/`), persistence models (`backend/app/models/`), validation schemas (`backend/app/schemas/`), and application logic (`backend/app/services/`).

FastAPI serves the API. SQLAlchemy provides a PostgreSQL-compatible persistence layer configured through `DATABASE_URL`. The API's `/health` endpoint is a liveness check and deliberately does not query the database. Docker Compose runs the API and PostgreSQL locally. Email ingress, SMTP, inbox persistence, and expiration jobs are future modules; no provider is selected at this stage.

## Security and privacy

- Keep real credentials in an untracked `.env`; `.env.example` contains only local development defaults.
- Replace the Compose database password and review network exposure before any shared or production deployment.
- Do not log email bodies, addresses, or credentials. Define retention and deletion behavior before persisting messages.
- Add authentication, rate limits, input limits, and abuse controls before exposing inbox creation publicly.
- Use TLS at the deployment edge and least-privilege database credentials in deployed environments.
