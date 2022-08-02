import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { ChangeEmailRequest, ChangeEmailResponse } from "../../shared/interfaces/api/changeEmail.shared";
import {
     CHANGE_EMAIL_API,
     CHANGE_EMAIL_EXISTED_EMAIL_ERROR,
     CHANGE_EMAIL_INVALID_EMAIL_ERROR,
} from "../../shared/routes/api/api.shared";
import { useHttp } from "../http.hook";

export default function useChangeEmailApi() {
     const { request, error, clientError, clearError, loading } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               if (clientError) {
                    let shownError = "";
                    switch (clientError) {
                         case CHANGE_EMAIL_INVALID_EMAIL_ERROR:
                              shownError = "Почта некорректна";
                              break;
                         case CHANGE_EMAIL_EXISTED_EMAIL_ERROR:
                              shownError = "Аккаунт с этой почтой уже существует";
                              break;
                         default:
                              shownError = "Ошибка при редактировании почты";
                              break;
                    }
                    return showTopPopup({ message: { text: shownError, type: "error" }, clearError });
               } else {
                    showTopPopup({
                         message: { text: "Ошибка при редактировании почты", type: "error" },
                         clearError,
                    });
               }
          }
     }, [error, clearError, showTopPopup, clientError]);

     const changeEmail = useCallback(
          async ({ email }: ChangeEmailRequest) => {
               const data: ChangeEmailResponse = await request({
                    url: CHANGE_EMAIL_API,
                    method: "POST",
                    body: { email },
               });

               return data;
          },
          [request]
     );

     return { changeEmail, loading };
}
