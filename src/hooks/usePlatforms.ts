import { useQuery } from "@tanstack/react-query";
import ParentPlatform from "../model/ParentPlatform";
import ApiClient from "../services/ApiClient";
const apiClient = new ApiClient<ParentPlatform>("/platforms/lists/parents" );
export default function usePlatforms()  {
    return useQuery<ParentPlatform[], Error>({
        queryKey:["genres"],
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 3600_000
    });
}