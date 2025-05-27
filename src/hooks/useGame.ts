import { Game } from "../model/fetch-game-types";
import GameQuery from "../model/GameQuery";
import useGameQuery from "../state-management/store";
import useFetchData from "./useFetchData";
export default function useGame(): {
  data: Game[];
  errorMessage: string;
  isLoading: boolean;
} {
  const gameQuery = useGameQuery(s => s.gameQuery)
  return useFetchData<Game>(
    "/games",
    {
      
      params: {
        genres: gameQuery.genreName,
        parent_platforms: gameQuery.platform?.id,
        search: gameQuery.search,
        ordering: gameQuery.ordering?.value
      },
    },
    [gameQuery]
  );
}
