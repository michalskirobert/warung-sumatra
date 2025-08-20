export const generateInstanceUrl = (locale: Locale) => {
  return {
    generateCaptcha: `/api/captcha/${locale}/generate`,
    contact: `/api/contact/${locale}`,
  };
};
