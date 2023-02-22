export const convertTimeToDate = (time: string | undefined) => {
  if (!time) return 0;

  const date = new Date();
  const hours = Number(time.split(":")[0]);
  const minutes = Number(time.split(":")[1]);

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1,
    hours,
    minutes
  ).getTime();
};
