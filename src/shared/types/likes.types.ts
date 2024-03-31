export type Like = {
    id: number;
    created_at: string | null;
    updated_at: string | null;  
    news: number;
    user: number;
}

export type SendLikeData = {
    news: number;
    user: number;
}