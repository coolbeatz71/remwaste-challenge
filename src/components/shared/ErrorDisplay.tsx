export interface ErrorDisplayProps {
    message: string;
}

export const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
    return (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-12 text-red-800 dark:text-red-300 flex flex-col text-center">
            <h3 className="text-xl font-bold mb-2">Error Loading Skips</h3>
            <p>{message}</p>
            <p className="mt-6 text-sm">
                Please try again later or contact support if the problem
                persists.
            </p>
        </div>
    );
};
