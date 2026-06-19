import logging
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse

logger = logging.getLogger(__name__)


class AppError(Exception):
    """Domain-level error raised by service and repository layers.

    Keeps HTTP concerns out of the service layer. The router layer
    (or the exception handler below) converts this to an HTTP response.
    """

    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code
        super().__init__(message)


def add_exception_handlers(app: FastAPI) -> None:
    """Registers all global exception handlers on the FastAPI application."""

    @app.exception_handler(AppError)
    async def app_error_handler(request: Request, exc: AppError) -> JSONResponse:
        logger.warning(
            "AppError: %s (status: %d) at %s", exc.message, exc.status_code, request.url
        )
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": exc.message, "status": "error"},
        )

    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception) -> JSONResponse:
        # Re-raise HTTPException so FastAPI's built-in handler returns the
        # correct 4xx/5xx response instead of a generic 500.
        if isinstance(exc, HTTPException):
            raise exc
        logger.error(
            "Unhandled exception at %s: %s", request.url, str(exc), exc_info=True
        )
        return JSONResponse(
            status_code=500,
            content={"detail": "An internal server error occurred.", "status": "error"},
        )
