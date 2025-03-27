import {} from "@/components/layout/Card.Layout";
import {} from "@/config/Icons";
import type { SkipModel } from "@/services/Api";
import NextImage from "next/image";
import { GridBackground } from "../shared/background/Grid.Background";
import { SkipCardButton } from "./SkipCard.Button";
import { SkipCardDayHire } from "./SkipCard.DayHire";
import { SkipCardStatus } from "./SkipCard.Status";

export interface SkipCardProps {
    skip: SkipModel;
    isSelected: boolean;
    onSelect: () => void;
}

export const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
    return (
        <div
            className={`relative backdrop-blur-sm bg-slate-100/60 p-3 sm:p-3.5 md:p-4 
                rounded-lg overflow-hidden flex flex-col
                border border-slate-200 cursor-pointer`}
        >
            <GridBackground size={20} />
            <div className="flex flex-col items-center py-6">
                <NextImage
                    src={skip.image}
                    alt="skip-icon"
                    width={120}
                    height={120}
                />
            </div>

            <p className="text-3xl font-bold font-sans text-blue-500 flex flex-row items-end justify-start gap-1">
                {skip.size} <span className="text-2xl">yards</span>
            </p>
            <br />
            <div className="flex flex-col">
                <SkipCardDayHire hirePeriodDays={skip.hirePeriodDays} />
                <SkipCardStatus type="road" status={skip.allowedOnRoad} />
                <SkipCardStatus
                    type="heavyWaste"
                    status={skip.allowsHeavyWaste}
                />
            </div>

            <br />
            <SkipCardButton isSelected={isSelected} onSelect={onSelect} />
        </div>
    );
};
