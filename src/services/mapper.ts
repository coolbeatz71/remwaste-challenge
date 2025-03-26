import type { SkipDto, SkipModel } from "./api";

export class SkipMapper {
    /**
     * Transform API DTO to UI Model
     * @param skipDto - The skip DTO from API
     * @returns Skip model for UI
     */
    static toUIModel(skipDto: SkipDto): SkipModel {
        return {
            id: skipDto.id,
            size: skipDto.size,
            price: skipDto.price_before_vat,
            rawPrice: skipDto.price_before_vat,
            period: skipDto.hire_period_days,
            privateOnly: !skipDto.allowed_on_road,
            image: "/placeholder.svg?height=200&width=400",
            hirePeriodDays: skipDto.hire_period_days,
            transportCost: skipDto.transport_cost,
            perTonneCost: skipDto.per_tonne_cost,
            vat: skipDto.vat,
            totalPrice:
                skipDto.price_before_vat +
                skipDto.price_before_vat * (skipDto.vat / 100),
            postcode: skipDto.postcode,
            area: skipDto.area,
            forbidden: skipDto.forbidden,
            createdAt: skipDto.created_at,
            updatedAt: skipDto.updated_at,
            allowedOnRoad: skipDto.allowed_on_road,
            allowsHeavyWaste: skipDto.allows_heavy_waste
        };
    }
}
