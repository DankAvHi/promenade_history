import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { VerifyUserResponse } from "../../shared/interfaces/api/verifyUser.shared";
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
          const data: VerifyUserResponse = await request({ url: AUTH_VERIFYUSER_API, method: "GET" });

          return data;
     }, [request]);

     return { verify, error };
}
