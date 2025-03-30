import { http, type HttpHandler } from "msw";
import type { SkipDto } from "../services/Api";

export const MOCKED_API_BASE_URL = "https://app.wewantwaste.co.uk/api";

const withBaseUrl = (relativeUrl: string): string =>
    `${MOCKED_API_BASE_URL}${relativeUrl}`;

export const mockGet = (
    relativeUrl: string,
    resolver: Parameters<typeof http.get>[1]
): HttpHandler => {
    return http.get(withBaseUrl(relativeUrl), resolver);
};

export const mockedSkips: SkipDto[] = [
    {
        id: 11554,
        size: 4,
        hire_period_days: 14,
        price_before_vat: 311,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: true,
        allows_heavy_waste: true,
        transport_cost: 0,
        per_tonne_cost: 0,
        area: ""
    },
    {
        id: 11555,
        size: 6,
        hire_period_days: 14,
        price_before_vat: 342,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: true,
        allows_heavy_waste: true,
        transport_cost: 0,
        per_tonne_cost: 0,
        area: ""
    },
    {
        id: 11556,
        size: 8,
        hire_period_days: 14,
        price_before_vat: 420,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: true,
        allows_heavy_waste: true,
        transport_cost: 0,
        per_tonne_cost: 0,
        area: ""
    },
    {
        id: 11557,
        size: 10,
        hire_period_days: 14,
        price_before_vat: 448,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
        transport_cost: 0,
        per_tonne_cost: 0,
        area: ""
    },
    {
        id: 11558,
        size: 12,
        hire_period_days: 14,
        price_before_vat: 491,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
        transport_cost: 0,
        per_tonne_cost: 0,
        area: ""
    },
    {
        id: 11559,
        size: 14,
        hire_period_days: 14,
        price_before_vat: 527,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
        transport_cost: 0,
        per_tonne_cost: 0,
        area: ""
    },
    {
        id: 11560,
        size: 16,
        hire_period_days: 14,
        price_before_vat: 556,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
        transport_cost: 0,
        per_tonne_cost: 0,
        area: ""
    },
    {
        id: 11561,
        size: 20,
        hire_period_days: 14,
        transport_cost: 236,
        per_tonne_cost: 236,
        price_before_vat: 944,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: true,
        area: ""
    },
    {
        id: 11562,
        size: 40,
        hire_period_days: 14,
        transport_cost: 236,
        per_tonne_cost: 236,
        price_before_vat: 944,
        vat: 20,
        postcode: "NR32",
        forbidden: false,
        created_at: "2021-04-06T17:04:42",
        updated_at: "2024-04-02T09:22:38",
        allowed_on_road: false,
        allows_heavy_waste: false,
        area: ""
    }
];
