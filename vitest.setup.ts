import { configMocks } from "jsdom-testing-mocks";
import "@testing-library/jest-dom";
import "whatwg-fetch";
import "vitest-canvas-mock";
import { act, cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

configMocks({ act });

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
}));

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
    }))
});

// Mock object URL
Object.defineProperty(URL, "createObjectURL", {
    writable: true,
    value: vi.fn()
});
Object.defineProperty(URL, "revokeObjectURL", {
    writable: true,
    value: vi.fn()
});

// Scroll Methods mock
window.Element.prototype.scrollTo = () => {};
window.Element.prototype.scrollIntoView = () => {};

afterEach(() => {
    cleanup();
});
