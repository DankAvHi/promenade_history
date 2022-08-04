import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { CancelEmailChangeResponse } from "../../shared/interfaces/api/cancelEmailChange.shared";
import { CANCEL_EMAIL_CHANGE_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "./../http.hook";

export default function useCancelEmailChangeApi() {
     const { request, error, clearError, loading } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               showTopPopup({ message: { text: "Ошибка при отмене смены Email", type: "error" }, clearError });
          }
     }, [error, clearError, showTopPopup]);

     const cancelEmailChangeVerification = useCallback(async () => {
          const data: CancelEmailChangeResponse = await request({
               url: CANCEL_EMAIL_CHANGE_API,
               method: "GET",
          });

          return data;
     }, [request]);

     return { cancelEmailChangeVerification, loading };
}
