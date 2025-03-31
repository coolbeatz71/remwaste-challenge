import { ThemeToggle } from "../shared/theme-toggle/ThemeToggle";

export const NavbarLayout = () => {
    return (
        <div className="sticky top-0 z-50 bg-gray-50 dark:bg-slate-800 shadow-md mb-4">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-xl font-bold text-foreground">
                        RemWaste Challenge
                    </h1>

                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};
