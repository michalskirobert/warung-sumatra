import { ContactFormData } from "../types";

export const scrollUpToAlert = () => {
  const notificationContainer = document.getElementById("notification");

  if (notificationContainer) {
    setTimeout(() => {
      notificationContainer.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      notificationContainer.focus({ preventScroll: true });
    }, 0);
  }
};

export const defaultValues: ContactFormData = {
  name: "",
  email: "",
  message: "",
  captcha: "",
  token: "",
};
