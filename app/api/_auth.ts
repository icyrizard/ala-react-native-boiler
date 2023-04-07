import { doRequest } from "./_helpers";
import BaseApi from "./_baseApi";

export default class Auth extends BaseApi {
  login({ username, password }) {
    return doRequest(this._axiosInstance, {
      method: 'post',
      url: '/auth/local',
      data: {
        identifier: username,
        password,
      }
    })
  }

  profile() {
    return doRequest(this._axiosInstance, {
      method: 'get',
      url: '/users/profile',
    })
  }

  log(data) {
    return doRequest(this._axiosInstance, {
      method: 'post',
      url: '/log',
      data: data,
    })
  }
}