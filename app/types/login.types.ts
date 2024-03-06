import { User } from "./user.types";

export interface LoginResponse {
    user: User;
    jwt: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}