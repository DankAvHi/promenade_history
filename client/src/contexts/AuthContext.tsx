import React from "react";

interface IAuthContext {
     login: (id: number) => void;
     logout: () => void;

     isAuthenticated: boolean | "unknow";
}

const defaultState: IAuthContext = {
     login: (id: number) => {},
     logout: () => {},

     isAuthenticated: false,
};

const AuthContext = React.createContext<IAuthContext>(defaultState);
export default AuthContext;
