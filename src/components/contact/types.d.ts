export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  captcha: string;
  token?: string;
};

export type NotificationProps = {
  status: "success" | "error" | undefined;
  message: string;
};
