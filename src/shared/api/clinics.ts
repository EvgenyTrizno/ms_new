import { AxiosResponse } from "axios";

import { instance } from "../config/axiosInstance";
import { ClinicResTypes} from "../types";

export async function getClinicById(
  token: string,
  clinicId: number
): Promise<AxiosResponse<ClinicResTypes>> {
  const res: AxiosResponse<ClinicResTypes> = await instance.get(
    `/admin/clinic/${clinicId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
}
