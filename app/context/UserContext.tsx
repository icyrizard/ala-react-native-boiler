import { createContext, useContext } from "react";

export const UserContext = createContext({
    user: null,
    setUser: null,
});

export function useUser() {
    return useContext(UserContext);
}
