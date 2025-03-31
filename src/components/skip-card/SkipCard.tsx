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
            <div className="flex flex-col items-center relative">
                {skip.privateOnly && (
                    <div className="self-end absolute">
                        <span
                            className={`bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 
                            rounded-sm dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300`}
                        >
                            Private Property Only
                        </span>
                    </div>
                )}
                <NextImage
                    className="py-6"
                    src={skip.image}
                    alt="skip-icon"
                    width={100}
                    height={100}
                />
            </div>

            <p className="text-2xl font-bold font-sans text-blue-500 flex flex-row items-end justify-start gap-1">
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
            <div className="flex flex-row justify-between items-center max-xl:flex-col max-xl:items-start">
                <p className="text-2xl font-bold text-cyan-400 flex items-center">
                    £{(skip.price * (1 + skip.vat / 100)).toFixed(2)}
                    <span className="text-sm font-light ml-1"> per week</span>
                </p>

                <p className="text-sm text-gray-400">VAT: {skip.vat}%</p>
            </div>

            <br />
            <SkipCardButton isSelected={isSelected} onSelect={onSelect} />
        </div>
    );
};
