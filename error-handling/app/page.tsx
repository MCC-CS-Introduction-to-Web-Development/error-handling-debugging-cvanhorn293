"use client";

import { ErrorBoundaryWrapper } from "./components/ErrorBoundaryWrapper";
import { MainContent } from "./components/MainContent";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <ErrorBoundaryWrapper>
                <MainContent />
            </ErrorBoundaryWrapper>
        </div>
    );
}
