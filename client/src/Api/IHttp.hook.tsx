export interface IHttpHook {
     loading: boolean;
     error: string | null;
     url: string;
     method: string;
     body: BodyInit | null | undefined | FormData | object;
     sendCredentials: boolean | null | undefined;
     isJSON: boolean | null | undefined;
     waitingForJson: boolean | null | undefined;
}
