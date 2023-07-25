import { Form } from "reactstrap";

import { Formik, FormikValues } from "formik";

import { CustomContainer } from "@components/shared";

import { validationSchema } from "./validation-schema";
import { createReservationForm } from "./utils";
import { useAppSelector } from "@store/config";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { formatPhoneNumber } from "@helpers/useful-functions";
import { PhoneNumbers } from "@utils/enums";
import { HiArrowDown } from "react-icons/hi2";
import { CiCalendar, CiTimer, CiUser } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export const Reservate = () => {
  const [t] = useTranslation("common");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const form = useMemo(() => {
    return createReservationForm(t);
  }, [language]);

  const send = (values: FormikValues) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(t("sentMessage"));
    }, 1000);
  };
  return (
    <Formik
      {...{
        initialValues: {
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          restaurant: "",
        },
        onSubmit: (values) => send(values),
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: validationSchema(language.value),
      }}
    >
      {({
        errors,
        handleChange,
        handleSubmit,
        isValid,
        setFieldValue,
        values,
      }) => (
        <CustomContainer {...{ marginTop: "450px" }}>
          <Form onSubmit={handleSubmit}>
            <section className="reservation">
              <div className="container">
                <div className="form reservation-form bg-black-10">
                  <form className="form-left">
                    <h2 className="headline-1 text-center">
                      Online Reservation
                    </h2>
                    <p className="form-text text-center">
                      We will try to contact you as fast as possible
                    </p>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        autoComplete="off"
                        className="input-field"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        autoComplete="off"
                        className="input-field"
                      />
                    </div>
                    <div className="input-wrapper">
                      <div className="icon-wrapper">
                        <CiUser />
                        <select name="person" className="input-field">
                          <option value="1-person">1 Person</option>
                          <option value="2-person">2 Person</option>
                          <option value="3-person">3 Person</option>
                          <option value="4-person">4 Person</option>
                          <option value="5-person">5 Person</option>
                          <option value="6-person">6 Person</option>
                          <option value="7-person">7 Person</option>
                        </select>
                        <HiArrowDown />
                      </div>
                      <div className="icon-wrapper">
                        <CiCalendar />
                        <input
                          type="date"
                          name="reservation-date"
                          className="input-field"
                        />
                        <HiArrowDown />
                      </div>
                      <div className="icon-wrapper">
                        <CiTimer />
                        <select name="person" className="input-field">
                          <option value="08:00am">08 : 00 am</option>
                          <option value="09:00am">09 : 00 am</option>
                          <option value="010:00am">10 : 00 am</option>
                          <option value="011:00am">11 : 00 am</option>
                          <option value="012:00am">12 : 00 am</option>
                          <option value="01:00pm">01 : 00 pm</option>
                          <option value="02:00pm">02 : 00 pm</option>
                          <option value="03:00pm">03 : 00 pm</option>
                          <option value="04:00pm">04 : 00 pm</option>
                          <option value="05:00pm">05 : 00 pm</option>
                          <option value="06:00pm">06 : 00 pm</option>
                          <option value="07:00pm">07 : 00 pm</option>
                          <option value="08:00pm">08 : 00 pm</option>
                          <option value="09:00pm">09 : 00 pm</option>
                          <option value="10:00pm">10 : 00 pm</option>
                        </select>
                        <HiArrowDown />
                      </div>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      autoComplete="off"
                      className="input-field"
                      defaultValue={""}
                    />
                    <button type="submit" className="btn btn-secondary">
                      <span className="text text-1">Book A Table</span>
                      <span className="text text-2" aria-hidden="true">
                        Book A Table
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
                    <h2 className="headline-1 text-center">Contact Us</h2>
                    <p className="contact-label">Booking Request</p>
                    <a
                      href="tel:+88123123456"
                      className="body-1 contact-number hover-underline"
                    >
                      {formatPhoneNumber(PhoneNumbers.Contact)}
                    </a>
                    <div className="separator" />
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
          </Form>
        </CustomContainer>
      )}
    </Formik>
  );
};
