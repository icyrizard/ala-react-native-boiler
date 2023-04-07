import Auth from "./_auth";
import { AxiosInstance } from "axios";
import Signup from "./_signup";

export const apiObject = {
  auth: new Auth(),
  signup: new Signup(),
};

export default function ApiInstance(axiosInstance: AxiosInstance): typeof apiObject {
  for (const [_, value] of Object.entries(apiObject)) {
    value.axiosInstance = axiosInstance
  }

  return apiObject;
}
