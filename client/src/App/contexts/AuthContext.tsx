import React from "react";

interface IAuthContext {
     login: (jwtToken: string, id: number) => void;
     logout: () => void;
     token: string | null;
     userID: number | null;
     isAuthenticated: boolean;
}

const defaultState: IAuthContext = {
     login: (jjwtToken: string, id: number) => {},
     logout: () => {},
     token: null,
     userID: null,
     isAuthenticated: false,
};

const AuthContext = React.createContext<IAuthContext>(defaultState);
export default AuthContext;
