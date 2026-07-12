"use client";

import { BuggyComponent } from "./BuggyComponent";

export function MainContent() {
    return (
        <main className="max-w-3xl mx-auto">
            <div className="space-y-6">
                <BuggyComponent />
            </div>
        </main>
    );
}
