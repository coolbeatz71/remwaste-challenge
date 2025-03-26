export interface ErrorDisplayProps {
    message: string;
}

export const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
    return (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-red-800 dark:text-red-300 mb-6">
            <h3 className="text-lg font-semibold mb-2">Error Loading Skips</h3>
            <p>{message}</p>
            <p className="mt-2 text-sm">
                Please try again later or contact support if the problem
                persists.
            </p>
        </div>
    );
};
