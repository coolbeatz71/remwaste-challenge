import useSWR from "swr";
import { SkipService } from "../services";
import type { ApiErrorDto, SkipsResponseDto } from "../services/Api";
import { SkipMapper } from "../services/Mapper";

/**
 * Custom hook for fetching skips by location using SWR
 */
export const useSkips = (postcode: string, area: string) => {
    const { data, error, isLoading } = useSWR<SkipsResponseDto>(
        "GetAllSkips",
        () => SkipService.getSkipsByLocation(postcode, area)
    );

    return {
        isLoading,
        skips: data?.skips.map(SkipMapper.toUIModel) || [],
        location: data?.location || null,
        error: error as ApiErrorDto | null
    };
};
