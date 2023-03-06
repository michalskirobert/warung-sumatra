import { NCommonTypes } from "@namespace/commonTypes";
import { ChildrensContainer, Choicer, Container, Separator } from "./styles";
import { useChoicerService } from "./service";

interface IChoicerProps {
  options: NCommonTypes.TOptions[];
  value: unknown;
  onEvent: (option?: NCommonTypes.TOptions) => void;
}

export const CustomChoicer = ({ options, value, onEvent }: IChoicerProps) => {
  const { checkIsActive, addSeparator } = useChoicerService({ value });
  return (
    <Container>
      {options.map(({ label, value }, index) => (
        <ChildrensContainer>
          <Choicer
            {...{
              isActive: checkIsActive(value),
              onClick: () =>
                onEvent(options.find((option) => option.value === value)),
            }}
          >
            {label}
          </Choicer>
          <Separator>{addSeparator(index, options.length)}</Separator>
        </ChildrensContainer>
      ))}
    </Container>
  );
};
