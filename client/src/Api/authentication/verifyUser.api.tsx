import { useEffect } from "react";
import { useHttp } from "./../http.hook";

export default function useVerifyUserApi() {
     const { request, error, clearError } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const verify = async () => {
          const headers: Headers = new Headers({
               "Content-Type": "application/json",
          });

          const data = await request("/api/authentication/verifyUser", "GET", null, headers, true);

          return data;
     };

     return { verify, error };
}
