import { useTranslations } from "next-intl";
import { NotificationProps } from "./types";

export const Notification = ({
  message,
  status,
}: Partial<NotificationProps>) => {
  const t = useTranslations();

  return (
    <div
      id="notification"
      role="alert"
      tabIndex={-1}
      className={`${status ? "block" : "hidden"} bg-${
        status === "success" ? "green" : "red"
      }-50 border border-${
        status === "success" ? "green" : "red"
      }-200 rounded-lg p-4 mb-6`}
    >
      {status && (
        <p
          className={`text-${
            status === "success" ? "green" : "red"
          }-800 text-sm`}
        >
          <strong>{t(`api-status-${status}`)}</strong> {message}
        </p>
      )}
    </div>
  );
};
