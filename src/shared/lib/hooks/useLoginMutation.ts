import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { login } from "../../api/login";
import { useCookie } from "./useCookie";

export const useLoginMutation = (number: string, password: string) => {
  const { setCookie } = useCookie();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => login(number, password),
    mutationKey: ["login"],
    onSuccess: (data) => {
      console.log(data);

      setCookie("refresh_token", data.data.refresh_token, 1);
      setCookie("access_token", data.data.access_token, 1);
      navigate("/");
    },
  });
};
