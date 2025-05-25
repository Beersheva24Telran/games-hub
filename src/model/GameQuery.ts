import { SortOption } from "../components/Sorter";
import ParentPlatform from "./ParentPlatform";

export default interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null;
    search: string | null,
    ordering: SortOption | null
}