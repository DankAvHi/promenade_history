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
          const data: UserResponse = await request({ url: GET_USER_DATA_API, method: "GET" });

          return data;
     }, [request]);

     return { getUserData, loading };
}
