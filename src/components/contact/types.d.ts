export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type NotificationProps = {
  status: "success" | "error" | undefined;
  message: string;
};
