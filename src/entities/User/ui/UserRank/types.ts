export interface IUserRankProps {
    rank: string;
    position?:
        | "start"
        | "end"
        | "left"
        | "right"
        | "center"
        | "justify"
        | "match-parent";
    fz?: string;
}
