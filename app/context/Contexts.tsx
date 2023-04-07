import { createContext, useContext } from "react";
import { apiObject } from "../api";


export const AxiosContext = createContext({
  axiosInstance: null,
  apiInstance: null as typeof apiObject,
});

export const AuthContext = createContext({
  jwt: null,
  user: null,
  setUser: null,
  setJwt: null,
});

export function useApi() {
  return useContext(AxiosContext);
}

export function useAuth() {
  return useContext(AuthContext);
}

