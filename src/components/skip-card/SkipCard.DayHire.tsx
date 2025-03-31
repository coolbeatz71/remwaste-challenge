import { IconTimer } from "@/config/Icons";

export interface SkipCardDayHireProps {
    hirePeriodDays: number;
}

export const SkipCardDayHire = ({ hirePeriodDays }: SkipCardDayHireProps) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <IconTimer size="sm" className="text-blue-400 text-xl" />

            <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                {hirePeriodDays} days hire period
            </p>
        </div>
    );
};
