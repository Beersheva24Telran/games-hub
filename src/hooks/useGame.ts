import { Game } from "../model/fetch-game-types";
import GameQuery from "../model/GameQuery";
import useFetchData from "./useFetchData";
export default function useGame(gameQuery: GameQuery) : {data: Game[], errorMessage:string, isLoading: boolean} {
    return useFetchData<Game>("/games", {params:{genres: gameQuery.genreName, parent_platforms: gameQuery.platform?.id}}, [gameQuery] );
}