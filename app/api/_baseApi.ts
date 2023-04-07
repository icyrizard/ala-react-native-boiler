import { AxiosInstance } from "axios";

export default class BaseApi {
  set axiosInstance(value: AxiosInstance) {
    this._axiosInstance = value;
  }

  _axiosInstance: AxiosInstance | undefined;
}