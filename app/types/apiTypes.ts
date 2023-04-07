export interface ValidatorObjectType {
    [key: string]: string[],
}

export interface ApiAxiosResponse {
    status: number;
    data: ApiResponseData[];
}

export interface ApiResponseData {
    id: number;
    [key: string]: any,
}

export interface ApiAxiosErrorResponse {
    status: number;
    data: ApiResponseError;
}

export interface ApiResponseError {
    errors: ValidatorObjectType[];
    error: string;
    message?: string;
    status: number;
}