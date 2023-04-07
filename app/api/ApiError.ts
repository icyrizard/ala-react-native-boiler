import { AxiosError } from "axios";
import { ApiAxiosErrorResponse, ApiAxiosResponse, ApiResponseData, ValidatorObjectType } from "../types/apiTypes";

export default class ApiError extends Error {
  public date: Date;
  public data: AxiosError;
  public messages: string[] = null;
  public validationErrors: ValidatorObjectType[] = null;

  constructor(error:AxiosError = null, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    this.name = 'ApiError'

    this.date = new Date()
    this.data = error;

    if (error?.response) {
      const { status, data } = error.response as ApiAxiosErrorResponse;

      if (data?.errors) {
        this.validationErrors = data.errors;
        const [field, message] = Object.entries(data.errors)[0] as string[];
        this.messages = [`${field} ${message}`];
      } else if (typeof data.error === 'string') {
        this.messages = [data.error];
      } else {
        this.messages = ['Unknown Api Error'];
      }
    } else {
      this.messages = ['Api Unreachable'];
    }
  }
}