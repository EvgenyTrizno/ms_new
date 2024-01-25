import { UserType } from "../types";

export const getUserTypeIcon = (userType: UserType) => {
  if (userType === "eye") return "/assets/icons/eye.svg";
  if (userType === "comment") return "/assets/icons/comment.svg";
  if (userType === "send") return "/assets/icons/send.svg";

  return "/assets/icons/send.svg";
};
