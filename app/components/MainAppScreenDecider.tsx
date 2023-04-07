import { ReactElement } from "react";
import { useApp } from "../context/AppContext";
import { UserContext } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";

interface MainAppScreenDeciderProps {
    unAuth: ReactElement;
    auth: ReactElement;
    notInit: ReactElement;
}

export default function MainAppScreenDecider({unAuth, auth, notInit}: MainAppScreenDeciderProps): ReactElement {
    const { initialized } = useApp();
    const { user, setUser, setJwt, jwt } = useAuth();

    // a good plcae to fetch the profile.
    // const { apiInstance } = useApi();
    // useQuery(['profile'], () => apiInstance.auth.profile(), {
    //     enabled: !!jwt,
    //     onSuccess(data) {
    //       setUser(data);
    //     },
    //     async onError(e) {
    //       await apiInstance.auth.log({ error: e.toString(), user, setUser, jwt });
    //     }
    //   }
    // );

    if (!initialized) {
        return notInit;
    }

    if (jwt && !user) {
        return unAuth;
    }

    return !user ? unAuth : auth;

}
