import { API_URL } from "@env";

import axios from "axios";
import { ReactNode } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext";
import { AxiosContext } from "../context/AxiosContext";

export type AxiosProviderProps = {
  children?: ReactNode;
}

export function AxiosProvider({ children }: AxiosProviderProps) {
  const {jwt, setJwt, setUser} = useAuth();

  const axiosInstance = axios.create({
    baseURL: API_URL,
  });

  // Set the AUTH token for any request
  axiosInstance.interceptors.request.use(config => {
    if (jwt && config?.headers) {
      config.headers['Authorization'] = `Bearer ${jwt}`;
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axiosInstance.interceptors.response.use(function (response) {
    // set refresh token
    if (response?.headers?.Authorization) {
      setJwt!(response.headers.Authorization);
    }

    return response;
  }, function (error) {
    if (error?.response?.status === 401) {
      setJwt!(null);
      setUser!(null)
    }

    if (!error.response) {
      console.log(error.response)
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  // init the api and pass it down the tree.
  const apiInstance = api(axiosInstance);

  return <AxiosContext.Provider value={{ axiosInstance, apiInstance }}>
    {children}
  </AxiosContext.Provider>
}