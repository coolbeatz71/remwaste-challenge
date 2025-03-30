import { IconTimer } from "@/config/Icons";

export interface SkipCardDayHireProps {
    hirePeriodDays: number;
}

export const SkipCardDayHire = ({ hirePeriodDays }: SkipCardDayHireProps) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <IconTimer size="sm" className="text-blue-400 text-xl" />

            <p className="text-zinc-50 max-md:text-sm max-sm:text-base">
                {hirePeriodDays} day hire period
            </p>
        </div>
    );
};
