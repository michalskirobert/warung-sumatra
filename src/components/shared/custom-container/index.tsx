import { PageContainer, Title, Wrapper } from "./styles";

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
      {!!title && (
        <Wrapper>
          <Title {...{ titleAlign }}>{title}</Title>
        </Wrapper>
      )}
      {children}
    </PageContainer>
  );
};
