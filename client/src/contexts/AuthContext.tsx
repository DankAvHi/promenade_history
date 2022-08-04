import React from "react";

interface IAuthContext {
     login: (email: string | null) => void;
     logout: () => void;

     email: string | null;
     isAuthenticated: boolean | "unknow";
}

const defaultState: IAuthContext = {
     login: (email: string | null) => {},
     logout: () => {},

     email: null,
     isAuthenticated: false,
};

const AuthContext = React.createContext<IAuthContext>(defaultState);
export default AuthContext;
