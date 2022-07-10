import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { api } from "../Api/index.api";

export const useAuth = () => {
     const { verify, error } = api().useVerifyUserApi();
     const [token, setToken] = useState<string | null>(null);
     const [userID, setUserID] = useState<number | null>(null);

     const login = useCallback((jwtToken: string, id: number) => {
          setToken(jwtToken);
          setUserID(id);
     }, []);

     const logout = useCallback(() => {
          setToken(null);
          setUserID(null);
     }, []);

     useEffect(() => {
          const verifyToken = async () => {
               try {
                    const data = await verify();

                    if (data.succes) {
                         const token = Cookies.get("token");
                         if (!token) {
                              setToken(null);
                              throw new Error("No cookie token");
                         }
                         login(token, data.iduser);
                    } else {
                         setToken(null);
                    }
               } catch (e) {
                    console.error(e);
                    setToken(null);
               }
          };

          verifyToken();

          // eslint-disable-next-line
     }, []);

     return { login, logout, token, userID, error };
};
