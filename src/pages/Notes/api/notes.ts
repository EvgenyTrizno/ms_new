import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";
import { Note } from "../types";

export async function getNotes(): Promise<AxiosResponse<Note[]>> {
  return await instance("/notes");
}
