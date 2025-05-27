import { useQuery } from "@tanstack/react-query";
import { Game } from "../model/fetch-game-types";
import useGameQuery from "../state-management/store";
import api from '../services/api-client';
import DataResponse from "../model/data-response";
export default function useGame() {
  const gameQuery = useGameQuery(s => s.gameQuery)
  return useQuery<Game[], Error>({
    queryKey:['games', gameQuery],
    queryFn: () => api.get<DataResponse<Game>>('/xgames', {
      params: {genres: gameQuery.genreName, ordering: gameQuery.ordering, search: gameQuery.search, parent_platforms: gameQuery.platform?.id}
    }).then(res => res.data.results),
    staleTime: 3600_000
  })
  
}
