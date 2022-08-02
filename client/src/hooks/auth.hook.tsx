import { useCallback, useEffect, useState } from "react";
import { api } from "../Api/index.api";

export const useAuth = () => {
     const { verify, error } = api().useVerifyUserApi();
     const [isAuthenticated, setIsAuthenticated] = useState<boolean | "unknow">("unknow");

     const login = useCallback((id: number) => {
          setIsAuthenticated(true);
     }, []);

     const logout = useCallback(() => {
          setIsAuthenticated(false);
     }, []);

     useEffect(() => {
          const isUserHasAuthenticated = window.localStorage.getItem("isUserHasAuthenticated") === "true";

          const verifyUser = async () => {
               try {
                    const data = await verify();

                    if (data.succes) {
                         login(data.vkid);
                         return true;
                    } else {
                         localStorage.setItem("isUserHasAuthenticated", "false");
                         logout();
                         return false;
                    }
               } catch (e) {
                    logout();
                    return false;
               }
          };

          if (isUserHasAuthenticated) {
               verifyUser().then((succes) => {
                    if (succes) {
                         setInterval(() => {
                              verifyUser();
                         }, 60 * 5 * 1000);
                    }
               });
          } else {
               setIsAuthenticated(false);
          }
     }, [login, logout, verify]);

     return { login, logout, isAuthenticated, error };
};
