export const generateInstanceUrl = (locale: Locale) => {
  return {
    sendMail: `/api/send-mail/${locale}`,
    generateCaptcha: `/api/captcha/${locale}/generate`,
    verifyCaptcha: `/api/captcha/${locale}/verify`,
  };
};
