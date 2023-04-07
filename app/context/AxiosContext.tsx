import { createContext, useContext } from "react";
import { apiObject } from "../api";


export const AxiosContext = createContext({
  axiosInstance: null,
  apiInstance: null as typeof apiObject,
});

export function useApi() {
  return useContext(AxiosContext);
}

