import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import { FormContainer, Header } from "./styles";

import { Formik } from "formik";

import { validationSchema } from "./validation-schema";
import { FORM_HELPER } from "./utils";
import { formatPhoneNumber } from "@helpers/useful-functions";

export const Reservate = () => {
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
        validationSchema,
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
        <FormContainer>
          <Header>Make reservation</Header>
          <Form onSubmit={handleSubmit}>
            {FORM_HELPER.map(({ id, row, rowType, subItems }) => (
              <Row key={id} {...{ [rowType]: row, subItems }}>
                {subItems.map(({ id, col, colType, label, type }) => (
                  <Col key={id} {...{ [colType]: col }}>
                    <FormGroup>
                      <Label>{label}</Label>
                      <Input
                        {...{
                          id: label,
                          name: label,
                          type,
                          value: values[label],
                          onBlur: (e) => {
                            if (label !== "phone") return;

                            setFieldValue(
                              label,
                              formatPhoneNumber(e.currentTarget.value)
                            );
                          },
                          invalid: !!errors[label],
                          onChange: handleChange,
                        }}
                      />
                      <FormFeedback>{errors[label]}</FormFeedback>
                    </FormGroup>
                  </Col>
                ))}
              </Row>
            ))}
            <Row>
              <Col>
                <Button
                  {...{
                    type: "submit",
                    color: "primary",
                    disabled: !isValid || !dirty,
                  }}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};
