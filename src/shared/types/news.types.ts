export interface INews {
    id: number;
    title: string | null;
    text: string | null;
    clinic: number | null;
    disease: number | null;
    news_images: {
        image: string;
    }[];
    news_videos: { video: string }[];
    quant_likes: number;

    upload_images?: string[];
    upload_videos?: string[];
}
