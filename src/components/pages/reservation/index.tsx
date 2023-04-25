import { Button, Col, Form, Row } from "reactstrap";

import { Formik } from "formik";

import { CustomContainer, CustomForm } from "@components/shared";

import { validationSchema } from "./validation-schema";
import { createReservationForm } from "./utils";
import { CONSTANTS } from "@utils/index";
import { useAppSelector } from "@store/config";

export const Reservate = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
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
        onSubmit: (values) => console.log(values),
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: validationSchema(language.value),
      }}
    >
      {({
        errors,
        handleChange,
        handleSubmit,
        dirty,
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
                form: createReservationForm(language.value),
                errors,
                handleChange,
                setFieldValue,
                values,
              }}
            />
            <Row>
              <Col>
                <Button
                  {...{
                    type: "submit",
                    color: "primary",
                    disabled: !isValid || !dirty,
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
