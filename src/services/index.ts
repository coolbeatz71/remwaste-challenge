import axios, { type AxiosResponse } from "axios";
import type { ApiErrorDto, SkipDto, SkipsResponseDto } from "./Api";
import { api } from "./Axios";

export class SkipService {
    /**
     * Fetch skips by location
     *
     * @param postcode - The postcode to search for
     * @param area - The area name
     * @returns Promise with skip data
     * @throws {ApiErrorDto} When the request fails
     */
    static async getSkipsByLocation(
        postcode: string,
        area: string
    ): Promise<SkipsResponseDto> {
        try {
            const response = await api.get<AxiosResponse>(
                "/skips/by-location",
                { params: { postcode, area } }
            );
            return {
                skips: response.data as unknown as SkipDto[],
                location: {
                    postcode,
                    area
                }
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw {
                    message:
                        error?.message ||
                        "Failed to fetch skips. Please try again later.",
                    status: error.status || 500
                } as ApiErrorDto;
            }
            throw {
                message: "An unexpected error occurred",
                status: 500
            } as ApiErrorDto;
        }
    }
}
