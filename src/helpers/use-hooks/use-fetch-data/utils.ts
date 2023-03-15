import { toast } from "react-toastify";
import axios from "axios";
import * as C from "@utils/constants";
import qs from "qs";

export const getQueryString = <T>(queryParams?: Partial<T>) =>
  `?${qs.stringify(queryParams, { allowDots: true })}`;

export const getErrorMessageText = (errorMessage: string): string => {
  const errorMessageRows = errorMessage.split("\n");
  const errorMessageDetails = errorMessageRows.filter((text) =>
    text.includes(C.REST_ERROR_DETAILS_STRING_FRAGMENT)
  );

  const errorMessageContainsDetails = !!errorMessageDetails[0];

  const splitStartIndex = C.REST_ERROR_DETAILS_STRING_FRAGMENT.length;

  return errorMessageContainsDetails
    ? errorMessageDetails[0].slice(splitStartIndex).trim()
    : errorMessage;
};

export const displayErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const requestErrorMessage = getErrorMessageText(
      error.response?.data?.errors?.message[0]
    );
    toast.error(requestErrorMessage);
  } else toast.error(C.TOAST_ERROR);
};
