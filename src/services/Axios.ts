import axios, {
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
    type AxiosResponseHeaders,
    type AxiosError
} from "axios";

export interface ApiResponse<T = unknown> {
    data: T;
    status: number;
    statusText: string;
    headers: AxiosResponseHeaders;
    config: InternalAxiosRequestConfig<T>;
    request?: unknown;
}

export interface ApiError<T = unknown> extends Error {
    config: InternalAxiosRequestConfig<T>;
    code?: string;
    request?: unknown;
    response?: AxiosResponse<T>;
    isAxiosError: boolean;
    toJSON: () => object;
}

/**
 * Axios instance for API requests
 */
export const api: AxiosInstance = axios.create({
    baseURL: "https://app.wewantwaste.co.uk/api",
    headers: { "Content-Type": "application/json" }
});

/**
 * Request interceptor for logging requests
 */
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
    }
);

/**
 * Response interceptor for logging responses and handling errors
 */
api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
    }
);

export type ApiPromise<T = unknown> = Promise<ApiResponse<T>>;
export type ApiErrorResponse<T = unknown> = ApiError<T>;
