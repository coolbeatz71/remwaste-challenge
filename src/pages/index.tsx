import { BottomDrawer } from "@/components/layout/Drawer.Layout";
import { NavbarLayout } from "@/components/layout/NavbarLayout";
import { StepsLayout } from "@/components/layout/Steps.Layout";
import { steps } from "@/config/Steps";
import { useSkips } from "@/hooks/UseSkips";
import type { SkipModel } from "@/services/Api";
import { Fragment, useState } from "react";
import SkipGrid from "../components/skip-grid/SkipGrid";

export default function Home() {
    const { skips, isLoading, error } = useSkips("NR32", "Lowestoft");
    const [selectedSkip, setSelectedSkip] = useState<SkipModel | null>(null);

    return (
        <Fragment>
            <NavbarLayout />
            <StepsLayout steps={steps} />

            <div className="container mx-auto px-4 py-6">
                <SkipGrid
                    skips={skips}
                    error={error}
                    loading={isLoading}
                    selectedSkip={selectedSkip}
                    setSelectedSkip={(skip) =>
                        setSelectedSkip((prev) =>
                            prev?.id === skip.id ? null : skip
                        )
                    }
                />
            </div>

            <BottomDrawer selectedSkip={selectedSkip} />
        </Fragment>
    );
}
