import { renderHook, waitFor } from "@testing-library/react";
import { HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { mockGet, mockedSkips } from "../test/MockedApi";
import { useSkips } from "./UseSkips";

const fakeArea = "Lowestoft";
const fakePostcode = "NR32";

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

beforeEach(() => server.restoreHandlers());
afterAll(() => server.close());

describe("useSkips hook", () => {
    test("should handle API error correctly", async () => {
        server.use(
            mockGet("/skips/by-location", async () => {
                return HttpResponse.json(
                    { message: "Request failed with status code 404" },
                    {
                        status: 404,
                        headers: { "Content-Type": "application/problem+json" }
                    }
                );
            })
        );

        const { result } = renderHook(() => useSkips(fakePostcode, fakeArea));

        await waitFor(() => expect(result.current.error).toBeDefined());

        expect(result.current.error).toEqual({
            message: "Request failed with status code 404",
            status: 404
        });
        expect(result.current.skips).toEqual([]);
        expect(result.current.isLoading).toBe(false);
    });

    test("should keep isLoading true while fetching", async () => {
        server.use(
            mockGet("/skips/by-location", async () => {
                return HttpResponse.json(mockedSkips);
            })
        );

        const { result } = renderHook(() => useSkips(fakePostcode, fakeArea));

        expect(result.current.isLoading).toBeTruthy();

        await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    });

    test("should fetch and transform skip data correctly", async () => {
        server.use(
            mockGet("/skips/by-location", async () => {
                return HttpResponse.json(mockedSkips);
            })
        );

        const { result } = renderHook(() => useSkips(fakePostcode, fakeArea));

        await waitFor(() =>
            expect(result.current.skips.length).toBe(mockedSkips.length)
        );

        expect(result.current.isLoading).toBe(false);
    });
});
