"use client";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import type { ErrorInfo } from "react";
import { loggingService } from "../services/loggingService";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Something went wrong</h1>

                <p className="text-gray-700 dark:text-gray-300 mb-6">An error occurred while rendering this component. You can try again or return to the home page.</p>

                <div className="flex gap-3">
                    <button onClick={resetErrorBoundary} className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium">
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}

interface ErrorBoundaryWrapperProps {
    children: React.ReactNode;
    fallback?: React.ComponentType<FallbackProps>;
}

export function ErrorBoundaryWrapper({ children, fallback = ErrorFallback }: ErrorBoundaryWrapperProps) {
    const handleError = (error: unknown, errorInfo: ErrorInfo) => {
        if (error instanceof Error) {
            loggingService.logError(error, { componentStack: errorInfo.componentStack || undefined });
        }
    };

    return (
        <ErrorBoundary FallbackComponent={fallback} onError={handleError}>
            {children}
        </ErrorBoundary>
    );
}
