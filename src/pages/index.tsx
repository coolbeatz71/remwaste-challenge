import { StepsLayout } from "@/components/layout/Steps.Layout";
import { steps } from "@/config/Steps";
import { useSkips } from "@/hooks/UseSkips";

export default function Home() {
    const { skips, isLoading } = useSkips("NR32", "Lowestoft");
    return (
        <div>
            <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h1 className="text-xl font-bold">
                            RemWaste Challenge
                        </h1>
                    </div>
                </div>
            </div>
            <StepsLayout steps={steps} />

            {/* <div className="container mx-auto px-4 py-6">
                <SkipGrid
                    loading={isLoading}
                    skips={skips}
                    selectedSkip={skips[0]}
                    setSelectedSkip={() => console.log("nothing")}
                />
            </div> */}
        </div>
    );
}
