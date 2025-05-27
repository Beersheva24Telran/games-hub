import { useQuery } from "@tanstack/react-query";
import { Genre } from "../model/fetch-genre-types";
import api from '../services/api-client'
import DataResponse from "../model/data-response";
export default function useGenre() {
    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => api.get<DataResponse<Genre>>('/genres').then(res => res.data.results),
        staleTime: 3600000 * 24
    });
    
}