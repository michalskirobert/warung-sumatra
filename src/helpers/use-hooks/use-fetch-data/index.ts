import { useQuery, UseQueryOptions } from "react-query";
import { AxiosInstance, AxiosRequestConfig } from "axios";

import { getQueryString } from "./utils";
import { displayErrorMessage } from "./utils";

type TUseFetchDataProps<T, U> = {
  queryName: string;
  axiosInstance: AxiosInstance;
  url?: string;
  config: AxiosRequestConfig;
  queryParams?: Record<string, any>;
  options?: UseQueryOptions<T, unknown, U, string[]>;
};

export const useFetchData = <T extends any, U = T>({
  queryName,
  axiosInstance,
  url,
  config,
  queryParams,
  options,
}: TUseFetchDataProps<T, U>) => {
  const fetchData = ({
    requestUrl,
    queryString,
  }: {
    requestUrl: string;
    queryString: string;
  }) =>
    axiosInstance
      .get(requestUrl + queryString, config)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err));

  return useQuery(
    [queryName],
    () =>
      fetchData({
        requestUrl: url ?? "",
        queryString: !!queryParams ? getQueryString(queryParams) : "",
      }),
    {
      ...options,
      onError: displayErrorMessage,
    }
  );
};
