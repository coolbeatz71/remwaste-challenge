import { steps } from "@/config/Steps";
import { useSkips } from "@/hooks/UseSkips";
import { mockedSkips } from "@/test/MockedApi";
import { fireEvent, render, screen } from "@testing-library/react";
import type { Mock } from "vitest";
import Home from ".";

vi.mock("@/hooks/UseSkips", () => ({
    useSkips: vi.fn()
}));

describe("Home Component", () => {
    test("should render all components", () => {
        (useSkips as Mock).mockReturnValue({
            skips: [],
            isLoading: false,
            error: null
        });

        render(<Home />);

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

        render(<Home />);
        expect(screen.getAllByTestId("skip-card-loading")).toHaveLength(6);
    });

    test("should handle skip selection toggle: display/hide bottom drawer", async () => {
        (useSkips as Mock).mockReturnValue({
            skips: mockedSkips,
            isLoading: false,
            error: null
        });

        render(<Home />);

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
