import { Notification } from "../Notification";

import { Input } from "./Input";
import { Textarea } from "./Textarea";

import { CustomButton } from "@src/components/shared/custom-button/Button";
import { Iconbutton } from "@src/components/shared/custom-button/IconButton";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { CaptchaImage } from "./CaptchaImage";
import { useFormService } from "./service";

export const ContactForm = () => {
  const {
    control,
    isLoading,
    notification,
    captcha,
    isFetching,
    isFetchingError,
    t,
    onSubmit,
    handleSubmit,
    getCaptcha,
  } = useFormService();

  return (
    <form className="flex gap-2 flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Notification {...notification} />
      <Input
        {...{
          name: "name",
          control,
          label: t("form-name-label"),
          placeholder: t("form-name-placeholder"),
          required: true,
          disabled: isLoading || isFetchingError,
        }}
      />
      <Input
        {...{
          name: "email",
          type: "email",
          control,
          label: t("form-email-label"),
          placeholder: t("form-email-placeholder"),
          required: true,
          disabled: isLoading || isFetchingError,
        }}
      />
      <Textarea
        {...{
          control,
          name: "message",
          label: t("form-message-label"),
          placeholder: t("form-message-placeholder"),
          required: true,
          disabled: isLoading || isFetchingError,
        }}
      />
      <div>
        {captcha?.image && (
          <div className="flex items-center gap-5 mb-2">
            <CaptchaImage
              src={captcha.image}
              isFetching={isFetching}
              isErrorFetching={isFetchingError}
            />
            <Iconbutton
              {...{
                icon: <ArrowPathIcon className="w-6 h-6" />,
                onClick: getCaptcha,
              }}
            />
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full">
          <Input
            {...{
              name: "captcha",
              control,
              label: "",
              className: "w-full",
              placeholder: t("captcha-placeholder"),
              required: true,
              disabled: isLoading || isFetchingError,
            }}
          />
          <CustomButton
            {...{
              color: "primary",
              content: t("form-submit-btn"),
              className: "sm:w-full !w-1/2",
              isLoading: isLoading,
            }}
          />
        </div>
      </div>
    </form>
  );
};
