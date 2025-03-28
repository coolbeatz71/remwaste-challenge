// Data Transfer Objects for API responses

// Skip DTO from API
export interface SkipDto {
    readonly id: number;
    size: number;
    hire_period_days: number;
    transport_cost: number;
    per_tonne_cost: number;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: string;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
}

// API Response DTO
export interface SkipsResponseDto {
    skips: SkipDto[];
    location: {
        postcode: string;
        area: string;
    };
    success: boolean;
    message?: string;
}

// Error DTO
export interface ApiErrorDto {
    message: string;
    status: number;
    errors?: Record<string, string[]>;
}

export interface SkipModel {
    id: number;
    size: number;
    price: number;
    rawPrice: number;
    period: number;
    privateOnly: boolean;
    image: string;
    hirePeriodDays: number;
    transportCost: number;
    perTonneCost: number;
    vat: number;
    totalPrice: number;
    postcode: string;
    area: string;
    forbidden: boolean;
    createdAt: string;
    updatedAt: string;
    allowedOnRoad: boolean;
    allowsHeavyWaste: boolean;
}
