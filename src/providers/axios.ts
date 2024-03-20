import Axios, { AxiosRequestConfig } from "axios";
import Qs from "qs";
import { removeToken } from "src/redux/auth";
import store from "src/redux/store";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: "repeat" }),
});

AXIOS_INSTANCE.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (!token || config.headers.Authorization) {
    return config;
  }
  config.headers.Authorization = `Token ${token}`;
  return config;
});

AXIOS_INSTANCE.interceptors.response.use(
  (value) => value,
  (error) => {
    if (error?.response?.status == 401) {
      store.dispatch(removeToken());
    }
    return Promise.reject(error.response.data);
  }
);

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
