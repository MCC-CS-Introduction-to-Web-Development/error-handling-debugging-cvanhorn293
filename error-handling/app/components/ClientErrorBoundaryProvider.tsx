"use client";

import { ErrorBoundaryWrapper } from "./ErrorBoundaryWrapper";

export function ClientErrorBoundaryProvider({ children }: { children: React.ReactNode }) {
    return <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>;
}
