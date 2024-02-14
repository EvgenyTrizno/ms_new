import { AxiosResponse } from "axios";

import { instance } from "../config/axiosInstance";
import { IClinic, IUserData } from "../types";

type ResTypes = {
  clinic: IClinic[];
  pacients: IUserData[];
};

export async function getClinicById(
  token: string,
  clinicId: number
): Promise<AxiosResponse<ResTypes>> {
  const res: AxiosResponse<ResTypes> = await instance.get(
    `/admin/clinic/${clinicId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
}
