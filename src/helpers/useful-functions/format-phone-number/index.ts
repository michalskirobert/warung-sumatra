export const formatPhoneNumber = (phone?: string) => {
  if (!phone) return;

  const regex = new RegExp(/(\d{3})(\d{3})(\d{3})/);

  const formattedValue = phone.replace(regex, "+48 $1 $2 $3");

  return formattedValue;
};
