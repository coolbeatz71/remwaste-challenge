import { StepsLayout } from "@/components/layout/Steps.Layout";
import { steps } from "@/config/Steps";

export default function Home() {
    return (
        <div>
            <StepsLayout steps={steps} />
        </div>
    );
}
