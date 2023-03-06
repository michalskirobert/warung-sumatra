export const setColumnsNumber = (length: number) => {
  if (length >= 4) {
    return 4;
  }

  return length;
};
