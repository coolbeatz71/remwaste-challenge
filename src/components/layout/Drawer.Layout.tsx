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
            p-3 rounded-lg w-full sm:w-auto transition-all duration-300 
            hover:bg-blue-100 dark:hover:bg-blue-900/40`}
        >
            <div
                className={`w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full 
                flex items-center justify-center text-blue-700 dark:text-blue-300 
                font-bold mr-3 transition-transform duration-300 hover:scale-110 hover:rotate-12`}
            >
                {skip.id}
            </div>
            <div>
                <p className="font-medium dark:text-white">
                    {skip.size} Skip Selected
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                    {skip.price} per week
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
