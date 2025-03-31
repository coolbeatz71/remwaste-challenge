import type { SkipModel } from "@/services/Api";
import { fireEvent, render, screen } from "@testing-library/react";
import { SkipCard } from "./SkipCard";

describe("SkipCard Component", () => {
    const mockSkip: SkipModel = {
        id: 1,
        size: 8,
        hirePeriodDays: 7,
        allowedOnRoad: true,
        allowsHeavyWaste: false,
        privateOnly: true,
        price: 100,
        vat: 20,
        image: "/test-skip.png",
        rawPrice: 0,
        period: 0,
        transportCost: 0,
        perTonneCost: 0,
        totalPrice: 0,
        postcode: "",
        area: "",
        forbidden: false,
        createdAt: "",
        updatedAt: ""
    };

    test("should render skip details correctly", () => {
        render(
            <SkipCard skip={mockSkip} isSelected={false} onSelect={vi.fn()} />
        );

        expect(screen.getByText("8")).toBeInTheDocument();
        expect(screen.getByText("£120.00")).toBeInTheDocument();
        expect(screen.getByText("VAT: 20%")).toBeInTheDocument();
        expect(screen.getByText("7 days hire period")).toBeInTheDocument();
        expect(screen.getByTestId("skip-status-road")).toHaveTextContent(
            "Allowed on road"
        );
        expect(screen.getByTestId("skip-status-heavyWaste")).toHaveTextContent(
            "Heavy waste not allowed"
        );
    });

    test("should display 'Private Property Only' badge when privateOnly is true", () => {
        render(
            <SkipCard skip={mockSkip} isSelected={false} onSelect={() => {}} />
        );
        expect(screen.getByText("Private Property Only")).toBeInTheDocument();
    });

    test("should call onSelect when clicked", () => {
        const onSelectMock = vi.fn();
        render(
            <SkipCard
                skip={mockSkip}
                isSelected={false}
                onSelect={onSelectMock}
            />
        );

        const card = screen.getByTestId("skip-card");
        fireEvent.click(card);

        expect(onSelectMock).toHaveBeenCalledTimes(1);
    });

    test("should apply selected styles when isSelected is true", () => {
        render(
            <SkipCard skip={mockSkip} isSelected={true} onSelect={() => {}} />
        );
        const card = screen.getByTestId("skip-card");

        expect(card).toHaveClass("border-cyan-400", "border-2");
    });

    test("should render the correct button state based on selection", () => {
        render(
            <SkipCard skip={mockSkip} isSelected={true} onSelect={() => {}} />
        );
        expect(
            screen.getByRole("button", { name: /Selected/ })
        ).toBeInTheDocument();

        render(
            <SkipCard skip={mockSkip} isSelected={false} onSelect={() => {}} />
        );
        expect(
            screen.getByRole("button", { name: /Select This Skip/ })
        ).toBeInTheDocument();
    });
});
