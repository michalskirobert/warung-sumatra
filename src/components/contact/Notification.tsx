import { useTranslations } from "next-intl";
import { NotificationProps } from "./types";

export const Notification = ({ message, status }: NotificationProps) => {
  const t = useTranslations();

  if (!status) return null;

  return (
    <div
      className={`bg-${
        status === "success" ? "green" : "red"
      }-50 border border-${
        status === "success" ? "green" : "red"
      }-200 rounded-lg p-4 mb-6`}
    >
      <p
        className={`text-${status === "success" ? "green" : "red"}-800 text-sm`}
      >
        <strong>{t(`api-status-${status}`)}</strong> {message}
      </p>
    </div>
  );
};
