export const generateId = (title: string, section: string) => {
  return `${title.split(" ").join("-")}-${section}`.toLowerCase();
};
