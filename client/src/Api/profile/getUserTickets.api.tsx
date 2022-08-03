import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { GetUserTicketsResponse } from "../../shared/interfaces/api/getUserTickets.shared";
import { GET_USER_TICKETS_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "./../http.hook";

export default function useGetUserTicketsApi() {
     const { request, error, clearError, loading } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               showTopPopup({ message: { text: "Ошибка при загрузке билетов", type: "error" }, clearError });
          }
     }, [error, clearError, showTopPopup]);

     const getUserTickets = useCallback(async () => {
          const data: GetUserTicketsResponse = await request({ url: GET_USER_TICKETS_API, method: "GET" });

          return data;
     }, [request]);

     return { getUserTickets, loading };
}
