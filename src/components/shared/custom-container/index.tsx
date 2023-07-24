import { PageContainer, Title, Wrapper } from "./styles";

interface ICustomContainer {
  children: JSX.Element | JSX.Element[] | string;
  title?: string;
  titleAlign?: "center" | "left" | "right";
  marginTop?: `${number}px`;
  marginBottom?: `${number}px`;
}

export const CustomContainer = ({
  children,
  title,
  titleAlign,
  marginBottom,
  marginTop,
}: ICustomContainer) => {
  return (
    <PageContainer {...{ marginBottom, marginTop }}>
      {!!title && (
        <Wrapper>
          <Title {...{ titleAlign }}>{title}</Title>
        </Wrapper>
      )}
      {children}
    </PageContainer>
  );
};
