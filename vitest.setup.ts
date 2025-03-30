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

// Implement BigInt conversion
// biome-ignore lint/suspicious/noExplicitAny: Cast to any, to avoid typing issue on non-existing "toJSON" method
(BigInt.prototype as any).toJSON = function () {
    return Number.parseInt(this.toString());
};

// Load dynamic modules in tests
vi.mock("next/dynamic", async () => {
    const dynamicModule =
        await vi.importActual<typeof import("next/dynamic")>("next/dynamic");
    return {
        default: (
            loader: () => Promise<{ default: React.ComponentType<unknown> }>
        ) => {
            const dynamicActualComp = dynamicModule.default;
            const RequiredComponent = dynamicActualComp(() =>
                loader().then((mod) => mod.default || mod)
            );

            // for debugging
            // biome-ignore lint/suspicious/noExplicitAny: Not sure it's possible to resolve the types of the component
            const componentAny = RequiredComponent as any;
            if (componentAny.render?.displayName) {
                componentAny.render.displayName = loader.toString();
            }

            if (typeof componentAny.preload === "function")
                componentAny.preload();
            else if (typeof componentAny.render?.preload === "function")
                componentAny.render.preload();

            return RequiredComponent;
        }
    };
});

afterEach(() => {
    cleanup();
});
