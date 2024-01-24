import Axios, { AxiosRequestConfig } from "axios";
import Qs from "qs";
import { useEffect } from "react";
import { useAuth } from "./AuthProvider";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: "repeat" }),
});

const AxiosProvider = ({ children }: { children: React.ReactElement }) => {
  const { token } = useAuth();

  useEffect(() => {
    const requestInterceptor = AXIOS_INSTANCE.interceptors.request.use(
      (config) => {
        if (!token || config.headers.Authorization) {
          return config;
        }
        config.headers.Authorization = `Token ${token}`;
        return config;
      }
    );

    const responseInterceptor = AXIOS_INSTANCE.interceptors.response.use(
      (value) => value,
      (error) => {
        if (error?.response?.status == 401) {
          localStorage.removeItem("token");
        }
        return Promise.reject(error.response.data);
      }
    );

    return () => {
      AXIOS_INSTANCE.interceptors.request.eject(requestInterceptor);
      AXIOS_INSTANCE.interceptors.response.eject(responseInterceptor);
    };
  }, [token]);

  return children;
};

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore

  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};

export default AxiosProvider;
