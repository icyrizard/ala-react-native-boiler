import { createContext, useContext } from "react";

interface AppContext {
    setInitialized: Function;
    initialized: boolean;
}

export const AppContext = createContext<AppContext>({
    setInitialized: () => {},
    initialized: false,
});

export function useApp() {
    return useContext(AppContext);
}
