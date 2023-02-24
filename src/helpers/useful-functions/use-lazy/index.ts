import { lazy } from "react";

export const lazyLoad = (path: string, namedExport?: string) =>
  lazy(async () => {
    const promise = import(path);

    if (!namedExport) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
