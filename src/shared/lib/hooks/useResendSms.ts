import { useMutation } from "react-query";
import { resendSms } from "@/shared/api/auth";

export const useResendSms = (email: string) => {
  return useMutation({
    mutationFn: () => resendSms(email),
    mutationKey: ["verify-code"],
  });
};
