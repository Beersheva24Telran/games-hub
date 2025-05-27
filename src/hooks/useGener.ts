import { useQuery } from "@tanstack/react-query";
import { Genre } from "../model/fetch-genre-types";
import ApiClient from "../services/ApiClient";
const apiClient = new ApiClient<Genre>('/genres')
export default function useGenre() {
    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => apiClient.getAll(),
        staleTime: 3600000 * 24
    });
    
}