import { IconArrowLeft, IconArrowRight } from "@/config/Icons";
import { cn } from "@/lib/Utils";
import type { SkipModel } from "@/services/Api";
import { Button } from "../shared/Button";

export interface BottomDrawerProps {
    selectedSkip: SkipModel | null;
}

export const BottomDrawer = ({ selectedSkip }: BottomDrawerProps) => {
    return (
        <div
            data-testid="bottom-drawer"
            className={cn(
                `fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t
                border-gray-200 dark:border-gray-700 shadow-lg 
                transition-all duration-500 ease-in-out`,
                selectedSkip
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0 pointer-events-none"
            )}
        >
            <div className="container mx-auto p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {selectedSkip && <SelectedSkipInfo skip={selectedSkip} />}

                    <NavigationButtons />
                </div>
            </div>
        </div>
    );
};

export interface SelectedSkipInfoProps {
    skip: SkipModel;
}

const SelectedSkipInfo = ({ skip }: SelectedSkipInfoProps) => {
    return (
        <div
            className={`flex items-center bg-blue-50 dark:bg-blue-900/30 
            p-2 rounded-lg w-full sm:w-auto transition-all duration-300 
            hover:bg-blue-100 dark:hover:bg-blue-900/40`}
        >
            <div className="p-1">
                <p className="dark:text-white">
                    <span className="font-bold">{skip.size} Yards</span> Skip
                    Selected
                </p>

                <p className="text-lg font-bold text-cyan-400 flex items-center">
                    £{(skip.price * (1 + skip.vat / 100)).toFixed(2)}
                    <span className="text-sm font-light ml-1"> per week</span>
                </p>
            </div>
        </div>
    );
};

const NavigationButtons = () => {
    return (
        <div className="flex gap-3 w-full sm:w-auto">
            <Button
                className={`px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 
                flex items-center justify-center flex-1 sm:flex-initial 
                dark:bg-gray-800 transition-all duration-300 hover:scale-105`}
            >
                <IconArrowLeft
                    size="sm"
                    className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back
            </Button>
            <Button
                className={`px-5 py-2 bg-blue-600 text-white rounded-md font-medium
                hover:bg-blue-700 flex items-center justify-center flex-1 
                sm:flex-initial transition-all duration-300 hover:scale-105`}
            >
                Continue
                <IconArrowRight
                    size="sm"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
            </Button>
        </div>
    );
};
