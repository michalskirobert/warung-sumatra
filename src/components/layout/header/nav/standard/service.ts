import { useAppDispatch } from "@store/config";

export const useStandardNavService = () => {
  const dispatch = useAppDispatch();

  return { dispatch };
};
