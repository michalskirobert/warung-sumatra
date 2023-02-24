import { PageContainer } from "./styles";

interface ICustomContainer {
  children: JSX.Element | JSX.Element[] | string;
}

export const CustomContainer = ({ children }: ICustomContainer) => {
  return <PageContainer>{children}</PageContainer>;
};
