import { createContext, useContext } from "react";

export const AuthContext = createContext({
    jwt: null,
    user: null,
    setUser: null,
    setJwt: null,
});

export function useAuth() {
    return useContext(AuthContext);
}