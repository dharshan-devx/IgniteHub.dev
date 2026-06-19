import json
import logging
from datetime import datetime, timezone


class JSONFormatter(logging.Formatter):
    """Formats log records as structured JSON for production log aggregators
    (e.g. Render's log drain, Datadog, or Cloud Logging).
    """

    def format(self, record: logging.LogRecord) -> str:
        log_record: dict = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "module": record.module,
            "function": record.funcName,
            "message": record.getMessage(),
        }
        if record.exc_info:
            log_record["exception"] = self.formatException(record.exc_info)
        return json.dumps(log_record)


def setup_logger() -> None:
    """Configures the root logger with a structured JSON handler.

    Called once at application startup in ``lifespan``.
    """
    root_logger = logging.getLogger()
                                                                
    for handler in root_logger.handlers[:]:
        root_logger.removeHandler(handler)

    handler = logging.StreamHandler()
    handler.setFormatter(JSONFormatter())
    root_logger.addHandler(handler)
    root_logger.setLevel(logging.INFO)
