import { useApp } from "../context/AppContext";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({ children }) {
  const { setInitialized } = useApp();

  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);

  const init = async () => {
    const jwt = await AsyncStorage.getItem('@AlaReactNativeBoiler:jwt') || null;

    if (jwt) {
      setJwt(jwt);
    }

    setInitialized(true);
  }

  const setJwtCb = (jwt) => {
    setJwt(jwt);

    if (jwt) {
      return AsyncStorage.setItem('@AlaReactNativeBoiler:jwt', jwt)
    } else {
      return AsyncStorage.removeItem('@AlaReactNativeBoiler:jwt')
    }
  }

  useEffect(() => {
    init();
  }, [])

  return (
      <AuthContext.Provider value={{jwt, setJwt: setJwtCb, setUser, user}}>
        {children}
      </AuthContext.Provider>
  )
}

