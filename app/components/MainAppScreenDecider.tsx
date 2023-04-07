import { ReactElement } from "react";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

interface MainAppScreenDeciderProps {
    unAuth: ReactElement;
    auth: ReactElement;
    notInit: ReactElement;
}

export default function MainAppScreenDecider({unAuth, auth, notInit}: MainAppScreenDeciderProps): ReactElement {
    const { initialized } = useApp();
    const { user, setUser, setJwt, jwt } = useAuth();

    // Note: this is a good place to fetch the profile. and set the user state

    if (!initialized) {
        return notInit;
    }

    if (jwt && !user) {
        return unAuth;
    }

    return !user ? unAuth : auth;

}
