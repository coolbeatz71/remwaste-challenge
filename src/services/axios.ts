import axios, {
    type AxiosInstance,
    type AxiosResponse,
    type AxiosError,
    type InternalAxiosRequestConfig,
    type AxiosResponseHeaders
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

export const api: AxiosInstance = axios.create({
    baseURL: "https://app.wewantwaste.co.uk/api",
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        console.log(
            `API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
            config.params
        );
        return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
        console.error("API Request Error:", error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
        console.log(`API Response: ${response.status}`, response.data);
        return response;
    },
    <T>(error: AxiosError<T>): Promise<AxiosError> => {
        let errorType: "response" | "request" | "other";

        if (error.response) errorType = "response";
        else if (error.request) errorType = "request";
        else errorType = "other";

        switch (errorType) {
            case "response": {
                const status = error.response?.status ?? "unknown status";
                console.error(`API Error: ${status}`, error.response?.data);
                break;
            }

            case "request":
                console.error("Network Error:", error.request);
                error.message =
                    "Network error. Please check your connection and try again.";
                break;

            case "other":
                console.error("Request Error:", error.message);
                break;

            default: {
                console.error("Unknown API Error:", error);
                const exhaustiveCheck: never = errorType;
                return exhaustiveCheck;
            }
        }

        return Promise.reject(error);
    }
);

export type ApiPromise<T = unknown> = Promise<ApiResponse<T>>;
export type ApiErrorResponse<T = unknown> = ApiError<T>;
