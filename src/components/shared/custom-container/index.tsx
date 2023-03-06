import { PageContainer, Title } from "./styles";

interface ICustomContainer {
  children: JSX.Element | JSX.Element[] | string;
  title?: string;
  titleAlign?: "center" | "left" | "right";
}

export const CustomContainer = ({
  children,
  title,
  titleAlign,
}: ICustomContainer) => {
  return (
    <PageContainer>
      {!!title && <Title {...{ titleAlign }}>{title}</Title>}
      {children}
    </PageContainer>
  );
};
