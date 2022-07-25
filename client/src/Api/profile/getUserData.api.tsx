import { useCallback, useEffect } from "react";
import useTopPopup from "../../Components/Common/TopPopup/TopPopup.hook";
import { UserResponse } from "../../shared/interfaces/api/userData.shared";
import { GET_USER_DATA_API } from "../../shared/routes/api/api.shared";
import { useHttp } from "./../http.hook";

export default function useGetUserDataApi() {
     const { request, error, clearError, loading } = useHttp();
     const { showTopPopup } = useTopPopup();

     useEffect(() => {
          if (error) {
               showTopPopup({ message: { text: "Ошибка при загрузке профиля", type: "error" }, clearError });
          }
     }, [error, clearError, showTopPopup]);

     const getUserData = useCallback(async () => {
          const headers: Headers = new Headers({
               "Content-Type": "application/json",
          });

          const data: UserResponse = await request(GET_USER_DATA_API, "GET", null, headers, true);

          return data;
     }, [request]);

     return { getUserData, loading };
}
