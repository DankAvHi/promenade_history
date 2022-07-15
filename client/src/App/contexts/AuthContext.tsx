import React from "react";

interface IAuthContext {
     login: (id: number) => void;
     logout: () => void;

     userID: number | null;
     isAuthenticated: boolean;
}

const defaultState: IAuthContext = {
     login: (id: number) => {},
     logout: () => {},

     userID: null,
     isAuthenticated: false,
};

const AuthContext = React.createContext<IAuthContext>(defaultState);
export default AuthContext;
