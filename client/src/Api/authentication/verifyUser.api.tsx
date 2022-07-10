import { useContext, useEffect } from "react";
import AuthContext from "../../App/contexts/AuthContext";
import { useHttp } from "./../http.hook";

export default function useVerifyUserApi() {
     const { request, error, clearError } = useHttp();
     const { userID, token } = useContext(AuthContext);

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const verify = async () => {
          const headers: Headers = new Headers({
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
          });

          const data = await request("/api/authentication/verifyUser", "POST", { userID }, headers, true);

          return data;
     };

     return { verify, error };
}
