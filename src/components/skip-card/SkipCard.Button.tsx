import { IconCheck, IconChevronRight } from "@/config/Icons";
import clsx from "clsx";
import { Fragment } from "react";

interface SkipCardButtonProps {
    isSelected: boolean;
    onSelect: () => void;
}

export const SkipCardButton = ({
    isSelected,
    onSelect
}: SkipCardButtonProps) => {
    const baseClasses = `
        flex justify-center items-center py-2.5 text-sm font-medium 
        rounded-lg focus:outline-none focus:ring-4 transition-colors`;

    const buttonVariants = {
        selected: `text-white bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800`,
        unselected: `text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 
            hover:text-blue-700 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 
            dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
    };

    const buttonClasses = clsx(
        baseClasses,
        isSelected ? buttonVariants.selected : buttonVariants.unselected
    );

    return (
        <button type="button" onClick={onSelect} className={buttonClasses}>
            {isSelected ? (
                <Fragment>
                    <IconCheck size="sm" className="mr-2" />
                    Selected
                </Fragment>
            ) : (
                <Fragment>
                    Select This Skip
                    <IconChevronRight size="sm" className="ml-2" />
                </Fragment>
            )}
        </button>
    );
};
