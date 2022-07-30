import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { AUTH_LOGOUT_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "./../http.hook";

export default function useLogoutApi() {
     const { request, error, clearError } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError, showTopPopup]);

     const logout = useCallback(async () => {
          const data = await request({ url: AUTH_LOGOUT_API, method: "DELETE" });

          return data;
     }, [request]);

     return { logout, error };
}
