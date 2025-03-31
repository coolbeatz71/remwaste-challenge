import type { ApiErrorDto } from "@/services/Api";
import SkipGrid, { NUMBER_OF_SKELETONS } from "./SkipGrid";

import { SkipMapper } from "@/services/Mapper";
import { mockedSkips } from "@/test/MockedApi";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SkipGrid", () => {
    test("should render error message when error exists", () => {
        const message = "An error occurred while fetching skips";
        const error: ApiErrorDto = {
            status: 500,
            message
        };
        render(
            <SkipGrid
                skips={[]}
                error={error}
                loading={false}
                selectedSkip={null}
                setSelectedSkip={vi.fn()}
            />
        );
        expect(screen.getByText(message)).toBeInTheDocument();
        expect(screen.getByText("Error Loading Skips")).toBeInTheDocument();
        expect(
            screen.getByText(
                "Please try again later or contact support if the problem persists."
            )
        ).toBeInTheDocument();
    });

    test("should render loading skeletons when loading", () => {
        render(
            <SkipGrid
                skips={[]}
                error={null}
                loading={true}
                selectedSkip={null}
                setSelectedSkip={vi.fn()}
            />
        );
        expect(screen.getAllByTestId("skip-card-loading")).toHaveLength(
            NUMBER_OF_SKELETONS
        );
    });

    test("should render skip cards when skips are available", () => {
        render(
            <SkipGrid
                skips={mockedSkips.map(SkipMapper.toUIModel)}
                error={null}
                loading={false}
                selectedSkip={null}
                setSelectedSkip={vi.fn()}
            />
        );
        expect(screen.getAllByTestId("skip-card")).toHaveLength(
            mockedSkips.length
        );
    });

    test("should call setSelectedSkip when a skip is clicked", async () => {
        const setSelectedSkip = vi.fn();
        const selectedSkip = mockedSkips.map(SkipMapper.toUIModel)[0];

        render(
            <SkipGrid
                error={null}
                loading={false}
                selectedSkip={selectedSkip}
                setSelectedSkip={setSelectedSkip}
                skips={mockedSkips.map(SkipMapper.toUIModel)}
            />
        );
        const firstSkipCard = await screen.findAllByTestId("skip-card");
        fireEvent.click(firstSkipCard[0]);

        expect(setSelectedSkip).toHaveBeenCalledTimes(1);
        expect(setSelectedSkip).toHaveBeenCalledWith(selectedSkip);
    });
});
