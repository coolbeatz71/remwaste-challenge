import type { ApiErrorDto, SkipModel } from "@/services/Api";
import { ErrorDisplay } from "../shared/ErrorDisplay";
import { SkipCard } from "../skip-card/SkipCard";
import { SkipCardLoading } from "../skip-card/SkipCard.Loading";

export const NUMBER_OF_SKELETONS = 8;

interface SkipGridProps {
    loading: boolean;
    skips: SkipModel[];
    error?: ApiErrorDto | null;
    selectedSkip: SkipModel | null;
    setSelectedSkip: (skip: SkipModel) => void;
}

const SkipGridHeader = () => (
    <div className="lg:py-6">
        <h2 className="text-3xl font-bold text-center mb-2">
            Choose Your Skip Size
        </h2>
        <p className="text-gray-600 dark:text-gray-500 text-center mb-8">
            Select the skip size that best suits your needs
        </p>
    </div>
);

export default function SkipGrid({
    skips,
    error,
    loading,
    selectedSkip,
    setSelectedSkip
}: SkipGridProps) {
    const gridClasses =
        "grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

    if (error) {
        return (
            <ErrorDisplay message="An error occurred while fetching skips" />
        );
    }

    return (
        <div className="flex flex-col mb-40 lg:mb-24">
            <SkipGridHeader />
            <div className={gridClasses}>
                {loading
                    ? [
                          ...Array.from({ length: NUMBER_OF_SKELETONS }).keys()
                      ].map((len) => <SkipCardLoading key={len} />)
                    : skips.map((skip) => (
                          <SkipCard
                              key={skip.id}
                              skip={skip}
                              isSelected={selectedSkip?.id === skip.id}
                              onSelect={() => setSelectedSkip(skip)}
                          />
                      ))}
            </div>
        </div>
    );
}
