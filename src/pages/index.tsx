import { StepsLayout } from "@/components/layout/Steps.Layout";
import { steps } from "@/config/Steps";
import { useSkips } from "@/hooks/UseSkips";
import SkipGrid from "../components/skip-grid/SkipGrid";

export default function Home() {
    const { skips, isLoading } = useSkips("NR32", "Lowestoft");
    return (
        <div>
            <StepsLayout steps={steps} />

            <div className="container mx-auto px-4 py-6">
                <SkipGrid
                    loading={isLoading}
                    skips={skips}
                    selectedSkip={skips[0]}
                    setSelectedSkip={() => console.log("nothing")}
                />
            </div>
        </div>
    );
}
