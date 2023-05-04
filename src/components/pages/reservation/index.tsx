import { Button, Col, Form, Row } from "reactstrap";

import { Formik, FormikValues } from "formik";

import { CustomContainer, CustomForm } from "@components/shared";

import { validationSchema } from "./validation-schema";
import { createReservationForm } from "./utils";
import { CONSTANTS } from "@utils/index";
import { useAppSelector } from "@store/config";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

export const Reservate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  const form = useMemo(() => {
    return createReservationForm(language.value);
  }, [language]);

  const send = (values: FormikValues) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(CONSTANTS.TRANSLATE[language.value].sentMessage);
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
        <CustomContainer
          {...{ title: CONSTANTS.RESERVATE_LABEL[language.value] }}
        >
          <Form onSubmit={handleSubmit}>
            <CustomForm
              {...{
                form,
                errors,
                handleChange,
                setFieldValue,
                values,
                isLoading,
              }}
            />
            <Row>
              <Col>
                <Button
                  {...{
                    type: "submit",
                    color: "primary",
                    disabled: !isValid || isLoading,
                  }}
                >
                  {CONSTANTS.TRANSLATE[language.value].send}
                </Button>
              </Col>
            </Row>
          </Form>
        </CustomContainer>
      )}
    </Formik>
  );
};
