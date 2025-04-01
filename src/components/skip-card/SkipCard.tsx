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
    const cardBgColor = isSelected
        ? "bg-slate-300 dark:bg-slate-700 border-cyan-400 dark:border-cyan-500 border-2"
        : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700";

    return (
        <div
            onClick={onSelect}
            onKeyDown={onSelect}
            data-testid="skip-card"
            className={`relative backdrop-blur-sm  ${cardBgColor} p-3 sm:p-3.5 md:p-4
                rounded-lg overflow-hidden flex flex-col dark:hover:bg-slate-900 hover:bg-slate-200 
                border  cursor-pointer hover:shadow-lg transition-all duration-300`}
        >
            <GridBackground size={1} />
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

                <div className="h-64 w-64 md:h-36 md:w-36 relative">
                    <NextImage
                        className="py-6"
                        src={skip.image}
                        alt="skip-icon"
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 640px) 100vw, 640px"
                        quality={50}
                        priority
                        fill
                    />
                </div>
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
            <SkipCardButton isSelected={isSelected} />
        </div>
    );
};
