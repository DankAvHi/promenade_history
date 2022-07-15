import { useCallback, useEffect, useState } from "react";
import { api } from "../Api/index.api";

export const useAuth = () => {
     const { verify, error } = api().useVerifyUserApi();
     const [userID, setUserID] = useState<number | null>(null);

     const login = useCallback((id: number) => {
          setUserID(id);
     }, []);

     const logout = useCallback(() => {
          setUserID(null);
     }, []);

     useEffect(() => {
          const verifyToken = async () => {
               try {
                    const data = await verify();

                    if (data.succes) {
                         login(data.vkid);
                    } else {
                         logout();
                    }
               } catch (e) {
                    console.error(e);
                    logout();
               }
          };

          verifyToken();

          // eslint-disable-next-line
     }, []);

     return { login, logout, userID, error };
};
