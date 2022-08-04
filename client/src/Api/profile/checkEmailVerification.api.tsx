import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { CheckEmailVerificationResponse } from "../../shared/interfaces/api/checkEmailVerification.shared";
import { CHECK_EMAIL_VERIFICATION_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "./../http.hook";

export default function useCheckEmailVerificationApi() {
     const { request, error, clearError, loading } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               showTopPopup({
                    message: { text: "Ошибка при проверке Email на верификации", type: "error" },
                    clearError,
               });
          }
     }, [error, clearError, showTopPopup]);

     const checkEmailVerification = useCallback(async () => {
          const data: CheckEmailVerificationResponse = await request({
               url: CHECK_EMAIL_VERIFICATION_API,
               method: "GET",
          });

          return data;
     }, [request]);

     return { checkEmailVerification, loading };
}
