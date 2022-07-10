import { useCallback, useState } from "react";
import { IHttpHook } from "./IHttp.hook";

export const useHttp = () => {
     const [loading, setLoading] = useState<IHttpHook["loading"]>(false);
     const [error, setError] = useState<IHttpHook["error"]>(null);

     const request = useCallback(
          async (
               url: IHttpHook["url"],
               method: IHttpHook["method"] = "GET",
               body?: IHttpHook["body"],
               headers = {} as Headers,
               sendCredentials: IHttpHook["sendCredentials"] = false,
               isJSON: IHttpHook["isJSON"] = true,
               waitingForJson: IHttpHook["waitingForJson"] = true
          ) => {
               setLoading(true);
               try {
                    if (body) {
                         body = JSON.stringify(body);
                         headers.set("Content-Type", "application/json");
                    }
                    const credentials = sendCredentials ? "include" : "same-origin";

                    const response = await fetch(url, {
                         method,
                         body,
                         credentials,
                         headers,
                    });
                    if (!response.ok) {
                         if (response.status) {
                              throw new Error(response.statusText || "Что-то пошло не так");
                         }
                         throw new Error("Что-то пошло не так");
                    }
                    const data: any = await (waitingForJson ? response.json() : response);

                    setLoading(false);

                    return data;
               } catch (e: any) {
                    setLoading(false);
                    setError(e.message);
                    throw e;
               }
          },
          []
     );

     const clearError = useCallback(() => setError(null), []);

     return { loading, request, error, clearError };
};
