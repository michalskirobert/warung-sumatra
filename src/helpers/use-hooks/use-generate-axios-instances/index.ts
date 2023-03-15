import axios, { AxiosInstance } from "axios";

import { AXIOS_INSTANCES_URLS } from "./utils";

type urlKeys = "configs" | "dictionaries" | "tags" | "teryts";

export const useGenerateAxiosInstances = () => {
  const createAxiosInstances = (
    axiosInstancesUrls: any
  ): Record<urlKeys, AxiosInstance> => {
    const axiosInstancesNames = Object.keys(axiosInstancesUrls);

    const createdAxiosInstances = axiosInstancesNames.map(
      (axiosInstanceName: string) =>
        axios.create({
          baseURL: axiosInstancesUrls[axiosInstanceName],
        })
    );

    let axiosInstances = {} as any;

    axiosInstancesNames.forEach((axiosInstanceName: string, index: number) => {
      axiosInstances[axiosInstanceName] = createdAxiosInstances[index];
    });

    return axiosInstances as Record<urlKeys, AxiosInstance>;
  };

  return {
    axiosInstances: createAxiosInstances(AXIOS_INSTANCES_URLS),
  };
};
