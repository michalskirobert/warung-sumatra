import { NLayout } from "@namespace/layout";

export const useTopbarService = () => {
  const isLastItem = (index: number, dataSource: NLayout.TTopbar[]) =>
    index + 1 === dataSource.length;

  return { isLastItem };
};
