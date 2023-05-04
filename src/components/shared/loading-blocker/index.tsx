import { ReactElement, ReactNode } from "react";

import BlockUi from "react-block-ui";
import { Spinner } from "reactstrap";

import "react-block-ui/style.css";

type TCustomLoadingBlocker = {
  children: ReactNode;
  isLoading?: boolean;
  message?: string;
};

export const LoadingBlocker = ({
  children,
  isLoading,
  message,
}: TCustomLoadingBlocker): ReactElement => (
  <BlockUi
    {...{
      tag: "div",
      blocking: isLoading,
      loader: <Spinner animation="border" variant="primary" />,
      message,
    }}
  >
    {children}
  </BlockUi>
);
