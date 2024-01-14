import { useNavigate } from "react-router";
import { useCallback } from "react";

import { useCookie } from "./useCookie";
import { useAuth } from "@/shared/model/store/auth";

export const useLogout = () => {
  const { removeCookie } = useCookie();
  const { setUser, setIsAuth } = useAuth();
  const navigate = useNavigate();


  const logout = useCallback(() => {
    removeCookie("refresh_token");
    removeCookie("access_token");
    navigate("/login");
    setIsAuth(false);
    setUser(null);
  }, []);

  return { logout }
};
