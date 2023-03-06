interface IServiceProps {
  value: unknown;
}

export const useChoicerService = ({ value }: IServiceProps) => {
  const checkIsActive = (currentValue: unknown) => currentValue === value;

  const addSeparator = (index: number, arrLength: number) => {
    const currentIndex = index + 1;

    if (currentIndex >= arrLength) return null;

    return "/";
  };

  return { checkIsActive, addSeparator };
};
