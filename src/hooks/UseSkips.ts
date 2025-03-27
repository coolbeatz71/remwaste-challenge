import useSWR from "swr";
import { SkipService } from "../services";
import type { ApiErrorDto, SkipsResponseDto } from "../services/Api";
import { SkipMapper } from "../services/Mapper";

/**
 * Custom hook for fetching skips by location using SWR
 */
export const useSkips = (postcode: string, area: string) => {
    const { data, error } = useSWR<SkipsResponseDto>(
        "GetAllSkips",
        async () => await SkipService.getSkipsByLocation(postcode, area)
    );

    return {
        skips: data?.skips.map(SkipMapper.toUIModel) || [],
        location: data?.location || null,
        isLoading: !data && !error,
        error: error as ApiErrorDto | null
    };
};
