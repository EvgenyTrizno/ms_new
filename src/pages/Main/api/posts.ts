import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";

interface IPostsResponse {
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

export async function getPost(): Promise<AxiosResponse<IPostsResponse[]>> {
  return await instance("/news/");
}
