from fastapi import APIRouter

router = APIRouter()


@router.get("/health", tags=["health"])
def health() -> dict[str, str]:
    """Report that the API process is running (database-independent liveness)."""
    return {"status": "ok"}
