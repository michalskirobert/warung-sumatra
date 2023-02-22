import React from "react";

import { Col, Row } from "reactstrap";
import { RenderElement } from "./render-element";
import { NShared } from "@namespace/shared";

export const CustomForm = ({
  form,
  values,
  setFieldValue,
  handleChange,
  errors,
}: NShared.TCustomForm) => {
  return (
    <>
      {form.map(({ id, row, rowType, subItems }) => (
        <Row key={id} {...{ [rowType]: row, subItems }}>
          {subItems.map(
            ({
              id,
              col,
              colType,
              label,
              type,
              options,
              mask,
              maskChar,
              isRequired,
            }) => (
              <Col key={id} {...{ [colType]: col }}>
                <RenderElement
                  {...{
                    id,
                    options,
                    form,
                    values,
                    setFieldValue,
                    handleChange,
                    errors,
                    label,
                    type,
                    mask,
                    maskChar,
                    isRequired,
                  }}
                />
              </Col>
            )
          )}
        </Row>
      ))}
    </>
  );
};
