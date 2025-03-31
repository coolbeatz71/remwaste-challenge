import type { SkipModel } from "@/services/Api";
import { SkipCard } from "../skip-card/SkipCard";
import { SkipCardLoading } from "../skip-card/SkipCard.Loading";

type SkipGridProps = {
    skips: SkipModel[];
    loading: boolean;
    selectedSkip: SkipModel | null;
    setSelectedSkip: (skip: SkipModel) => void;
};

const SkipGridHeader = () => (
    <div className="py-6">
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
    loading,
    selectedSkip,
    setSelectedSkip
}: SkipGridProps) {
    const gridClasses =
        "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

    return (
        <div className="flex flex-col">
            <SkipGridHeader />
            <div className={gridClasses}>
                {loading
                    ? [...Array.from({ length: 6 }).keys()].map((len) => (
                          <SkipCardLoading key={len} />
                      ))
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
