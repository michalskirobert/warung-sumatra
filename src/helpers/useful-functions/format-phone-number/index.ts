export const formatPhoneNumber = (phone?: string | number) => {
  if (!phone) return;

  const regex = new RegExp(/(\d{3})(\d{3})(\d{3})/);

  const formattedValue = String(phone).replace(regex, "+48 $1 $2 $3");

  return formattedValue;
};
