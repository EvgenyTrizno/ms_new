import { useMutation } from "react-query";
import { verifyCode } from "@/shared/api/auth";

export const useVerifyCode = (email: string, verification_code: number) => {
  return useMutation({
    mutationFn: () => verifyCode(email, verification_code),
    mutationKey: ["verify-code"],
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
