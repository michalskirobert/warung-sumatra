import { Button, Col, Form, Row } from "reactstrap";

import { Formik } from "formik";

import { createContactForm } from "./utils";
import { validationSchema } from "./validation-schema";
import { Image } from "react-bootstrap";
import { CustomContainer, CustomForm } from "@components/shared";
import { useAppSelector } from "@store/config";

import { CONSTANTS } from "@utils/index";

export const Contact = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  return (
    <Formik
      {...{
        initialValues: { fullname: "", email: "", phone: "", content: "" },
        onSubmit: (values) => console.log(values),
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: validationSchema(language.value),
      }}
    >
      {({
        dirty,
        errors,
        handleChange,
        handleSubmit,
        isValid,
        setFieldValue,
        values,
      }) => (
        <CustomContainer
          {...{ title: CONSTANTS.CONTACT_LABEL[language.value] }}
        >
          <Form onSubmit={handleSubmit}>
            <Row md={2}>
              <Col>
                <CustomForm
                  {...{
                    form: createContactForm(language.value),
                    errors,
                    handleChange,
                    setFieldValue,
                    values,
                  }}
                />
                <Button
                  {...{
                    color: "primary",
                    type: "submit",
                    disabled: !isValid || !dirty,
                  }}
                >
                  {CONSTANTS.TRANSLATE[language.value].send}
                </Button>
              </Col>
              <Col>
                <Image
                  {...{
                    src: "https://www.advancedcustomfields.com/wp-content/uploads/2013/11/acf-google-map-field-interface.png",
                    style: {
                      minWidth: "150px",
                      maxWidth: "400px",
                      margin: "5px auto",
                      objectFit: "cover",
                    },
                  }}
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem minus molestias voluptatibus dicta aspernatur
                  iure rem reprehenderit quos quidem, delectus sit nihil dolorem
                  deserunt, placeat perspiciatis excepturi rerum accusamus quas.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  dignissimos ipsam quod accusantium facilis, atque saepe
                  delectus possimus nam consequatur aperiam fugiat, dolor
                  repudiandae dolorum! Et saepe maxime ut eaque blanditiis
                  recusandae. Eius amet quibusdam maiores enim molestiae
                  corporis eveniet error! Nesciunt alias, eos
                </p>
              </Col>
            </Row>
          </Form>
        </CustomContainer>
      )}
    </Formik>
  );
};
