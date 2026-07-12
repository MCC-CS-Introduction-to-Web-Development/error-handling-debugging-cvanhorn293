export interface ErrorLog {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: Date;
  userAgent: string;
  url: string;
}

class LoggingService {
  logError(error: Error, errorInfo?: { componentStack?: string }): void {
    const errorLog: ErrorLog = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR',
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
    };

    console.error('Error caught:', errorLog);

    this.sendToBackend(errorLog);
  }

  private async sendToBackend(errorLog: ErrorLog): Promise<void> {
    // In production, send to logging service
    // Example: await fetch('/api/logs', { method: 'POST', body: JSON.stringify(errorLog) });
    console.log('Error logged:', errorLog.message);
  }

  logEvent(event: string, data?: unknown): void {
    console.log(`Event: ${event}`, data);
  }
}

export const loggingService = new LoggingService();
