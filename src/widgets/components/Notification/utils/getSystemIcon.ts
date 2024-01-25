import { SystemType } from "../types";

export const getSystemIcon = (systemType: SystemType) => {
  if (systemType === "error") return "/assets/icons/error.svg";
  if (systemType === "time") return "/assets/icons/time.svg";
  if (systemType === "success") return "/assets/icons/success.svg";

  return "/assets/icons/time.svg";
};
