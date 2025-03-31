import { steps } from "@/config/Steps";
import { useSkips } from "@/hooks/UseSkips";
import { mockedSkips } from "@/test/MockedApi";
import { fireEvent, render, screen } from "@testing-library/react";
import type { ClassAttributes, ImgHTMLAttributes, JSX } from "react";
import type { Mock } from "vitest";
import { NUMBER_OF_SKELETONS } from "../skip-grid/SkipGrid";
import { HomeContainer } from "./Home";

vi.mock("@/hooks/UseSkips", () => ({
    useSkips: vi.fn()
}));

vi.mock("next/image", () => ({
    default: (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLImageElement> &
            ImgHTMLAttributes<HTMLImageElement>
    ) => <img {...props} alt={props.alt} data-testid="skip-image" />
}));

describe("HomeContainer Component", () => {
    test("should render all components", () => {
        (useSkips as Mock).mockReturnValue({
            skips: [],
            isLoading: false,
            error: null
        });

        render(<HomeContainer />);

        expect(screen.getByText("RemWaste Challenge")).toBeInTheDocument();

        for (const step of steps) {
            expect(screen.getByText(step.name)).toBeInTheDocument();
        }
    });

    test("should display the skeletons", () => {
        (useSkips as Mock).mockReturnValue({
            skips: [],
            isLoading: true,
            error: null
        });

        render(<HomeContainer />);
        expect(screen.getAllByTestId("skip-card-loading")).toHaveLength(
            NUMBER_OF_SKELETONS
        );
    });

    test("should handle skip selection toggle: display/hide bottom drawer", async () => {
        (useSkips as Mock).mockReturnValue({
            skips: mockedSkips,
            isLoading: false,
            error: null
        });

        render(<HomeContainer />);

        const firstSkipCard = await screen.findAllByTestId("skip-card");
        // click for the first time
        fireEvent.click(firstSkipCard[0]);

        const drawer = screen.getByTestId("bottom-drawer");

        // drawer is visible
        expect(drawer).toHaveClass("translate-y-0", "opacity-100");

        // click for the second time
        fireEvent.click(firstSkipCard[0]);

        // drawer is hidden
        expect(drawer).toHaveClass(
            "translate-y-full",
            "opacity-0",
            "pointer-events-none"
        );
    });
});
