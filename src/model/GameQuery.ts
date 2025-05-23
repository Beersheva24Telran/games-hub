import ParentPlatform from "./ParentPlatform";

export default interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null
}