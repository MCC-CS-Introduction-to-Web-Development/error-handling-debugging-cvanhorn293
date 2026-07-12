"use client";

import { useState } from "react";

export function BuggyComponent() {
    const [shouldThrow, setShouldThrow] = useState(false);

    if (shouldThrow) {
        throw new Error("Something went wrong in the component!");
    }

    return (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-4">Click the button to simulate an error:</p>
            <button onClick={() => setShouldThrow(true)} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium">
                Cause Error
            </button>
        </div>
    );
}
