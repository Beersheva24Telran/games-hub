import { Game } from "../model/fetch-game-types";
import ParentPlatform from "../model/ParentPlatform";
import useFetchData from "./useFetchData";
export default function useGame(genreName: string | null, platform: ParentPlatform | null) : {data: Game[], errorMessage:string, isLoading: boolean} {
    return useFetchData<Game>("/games", {params:{genres: genreName, parent_platforms: platform?.id}}, [genreName, platform] );
}