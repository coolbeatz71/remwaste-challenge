export interface SkipCardLoadingProps {
    className?: string;
}

export const SkipCardLoading = ({ className }: SkipCardLoadingProps) => {
    return (
        <div
            data-testid="skip-card-loading"
            className={`p-4 relative overflow-hidden rounded-lg bg-white 
                dark:bg-gray-800 shadow animate-pulse ${className || ""}`}
        >
            <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <div className="pt-4">
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
                <div className="h-4 w-52 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
                <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
                <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
        </div>
    );
};
