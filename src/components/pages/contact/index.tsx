import { Formik, FormikValues } from "formik";

import { toast } from "react-toastify";

import { createContactForm } from "./utils";
import { validationSchema } from "./validation-schema";
import { CustomContainer, CustomForm } from "@components/shared";
import { useAppSelector } from "@store/config";

import { CONSTANTS } from "@utils/index";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t] = useTranslation(["contact", "common"]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const form = useMemo(() => {
    return createContactForm(t);
  }, [language]);

  const send = (values: FormikValues) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(t("common:sentMessage"));
    }, 1000);
  };
  return (
    <Formik
      {...{
        initialValues: { name: "", email: "", phone: "", content: "" },
        onSubmit: (values) => send(values),
        validateOnBlur: true,
        validationSchema: validationSchema(language.value),
      }}
    >
      {({ errors, handleChange, setFieldValue, values, handleSubmit }) => (
        <CustomContainer {...{ marginTop: "450px" }}>
          <section className="reservation">
            <div className="container">
              <div className="form reservation-form bg-black-10">
                <form className="form-left" onSubmit={handleSubmit}>
                  <h2 className="headline-1 text-center">{t("page.header")}</h2>
                  <p className="form-text text-center">{t("page.subtitle")}</p>
                  <CustomForm
                    {...{
                      errors,
                      values,
                      handleChange,
                      setFieldValue,
                      form,
                    }}
                  />
                  <button type="submit" className="btn btn-secondary">
                    <span className="text text-1">{t("common:send")}</span>
                    <span className="text text-2" aria-hidden="true">
                      {t("common:send")}
                    </span>
                  </button>
                </form>
                <div
                  className="form-right text-center"
                  style={{
                    backgroundImage:
                      'url("./../../../assets/temp/images/form-pattern.png")',
                  }}
                >
                  <h2 className="headline-1 text-center">Visit us</h2>
                  <p className="contact-label">Location</p>
                  <address className="body-4">
                    Poznań
                    <br />
                    XXX street 11/11
                  </address>
                  <p className="contact-label">Lunch Time</p>
                  <p className="body-4">
                    Monday to Sunday <br />
                    11.00 am - 2.30pm
                  </p>
                  <p className="contact-label">Dinner Time</p>
                  <p className="body-4">
                    Monday to Sunday <br />
                    05.00 pm - 10.00pm
                  </p>
                </div>
              </div>
            </div>
          </section>
        </CustomContainer>
      )}
    </Formik>
  );
};
