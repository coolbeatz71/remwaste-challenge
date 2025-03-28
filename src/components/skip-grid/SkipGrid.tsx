import type { SkipModel } from "@/services/Api";
import { SkipCard } from "../skip-card/SkipCard";
import { SkipCardLoading } from "../skip-card/SkipCard.Loading";

type SkipGridProps = {
    skips: SkipModel[];
    loading: boolean;
    selectedSkip: SkipModel | null;
    setSelectedSkip: (skip: SkipModel) => void;
};

export default function SkipGrid({
    skips,
    loading,
    selectedSkip,
    setSelectedSkip
}: SkipGridProps) {
    const gridClasses = "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

    if (loading) {
        return (
            <div className={gridClasses}>
                {[...Array.from({ length: 6 }).keys()].map((len) => (
                    <SkipCardLoading key={len} />
                ))}
            </div>
        );
    }

    return (
        <div className={gridClasses}>
            {skips.map((skip) => (
                <SkipCard
                    key={skip.id}
                    skip={skip}
                    isSelected={selectedSkip?.id === skip.id}
                    onSelect={() => setSelectedSkip(skip)}
                />
            ))}
        </div>
    );
}
