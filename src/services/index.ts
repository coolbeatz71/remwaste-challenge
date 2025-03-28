import axios, {} from "axios";
import type { ApiErrorDto, SkipsResponseDto } from "./Api";
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
            const response = await api.get<SkipsResponseDto>(
                "/skips/by-location",
                {
                    params: { postcode, area }
                }
            );

            // handle success case with proper type checking
            if (!response.data.success && !response.data.message) {
                return {
                    ...response.data,
                    message: "No skips found for this location"
                };
            }

            return response.data;
        } catch (error) {
            if (
                axios.isAxiosError<{
                    message?: string;
                    errors?: Record<string, string[]>;
                }>(error)
            ) {
                const apiError: ApiErrorDto = {
                    message:
                        error.response?.data?.message ||
                        "Failed to fetch skips. Please try again later.",
                    status: error.response?.status || 500,
                    errors: error.response?.data?.errors
                };
                throw apiError;
            }

            // handle non-Axios errors
            const apiError: ApiErrorDto = {
                message: "An unexpected error occurred",
                status: 500
            };
            throw apiError;
        }
    }
}
