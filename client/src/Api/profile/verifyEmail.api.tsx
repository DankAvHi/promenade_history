import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { VerifyEmailRequest, VerifyEmailResponse } from "../../shared/interfaces/api/verifyEmail.shared";
import { VERIFY_EMAIL_API, VERIFY_EMAIL_INCORRECT_CODE } from "../../shared/routes/api/api.shared";
import { useHttp } from "../http.hook";

export default function useVerifyEmailApi() {
     const { request, error, clientError, clearError, loading } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               if (clientError) {
                    let shownError = "";
                    switch (clientError) {
                         case VERIFY_EMAIL_INCORRECT_CODE:
                              shownError = "Неверный код";
                              break;
                         default:
                              shownError = "Ошибка при отправке кода";
                              break;
                    }
                    return showTopPopup({ message: { text: shownError, type: "error" }, clearError });
               } else {
                    showTopPopup({
                         message: { text: "Ошибка при отправке кода", type: "error" },
                         clearError,
                    });
               }
          }
     }, [error, clearError, showTopPopup, clientError]);

     const verifyEmail = useCallback(
          async ({ verifyCode }: VerifyEmailRequest) => {
               const data: VerifyEmailResponse = await request({
                    url: VERIFY_EMAIL_API,
                    method: "POST",
                    body: { verifyCode },
               });

               return data;
          },
          [request]
     );

     return { verifyEmail, loading };
}
