import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { type Mock, vi } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

vi.mock("next-themes", async () => {
    const actual =
        await vi.importActual<typeof import("next-themes")>("next-themes");
    return {
        ...actual,
        useTheme: vi.fn(() => ({ theme: "light", setTheme: vi.fn() }))
    };
});

describe("ThemeToggle", () => {
    it("should toggle theme on button click", async () => {
        const { useTheme } = await import("next-themes");
        const setTheme = vi.fn();
        (useTheme as Mock).mockReturnValue({ theme: "light", setTheme });

        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );

        const button = screen.getByRole("button", { name: /toggle theme/i });
        fireEvent.click(button);

        expect(setTheme).toHaveBeenCalledWith("dark");
    });
});
