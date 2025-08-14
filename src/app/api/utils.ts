export const generateInstanceUrl = (locale: Locale) => {
  return {
    sendMail: `/api/send-mail/${locale}`,
  };
};
