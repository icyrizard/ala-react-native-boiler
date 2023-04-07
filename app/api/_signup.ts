import ApiError from "./ApiError";
import BaseApi from "./_baseApi";

export default class Signup extends BaseApi {
  async signup(params) {
    try {
      const { data } = await this._axiosInstance.post(`/auth/local/register`, params);

      return data;
    } catch (error) {
      throw new ApiError(error)
    }
  }
}