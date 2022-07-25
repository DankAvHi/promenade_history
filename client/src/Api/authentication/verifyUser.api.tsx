import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { AUTH_VERIFYUSER_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "./../http.hook";

export default function useVerifyUserApi() {
     const { request, error, clearError } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError, showTopPopup]);

     const verify = useCallback(async () => {
          const headers: Headers = new Headers({
               "Content-Type": "application/json",
          });

          const data = await request(AUTH_VERIFYUSER_API, "GET", null, headers, true);

          return data;
     }, [request]);

     return { verify, error };
}
