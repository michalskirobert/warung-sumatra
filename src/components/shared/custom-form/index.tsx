import React from "react";

import { Col, Row } from "reactstrap";
import { RenderElement } from "./render-element";
import { NShared } from "@namespace/shared";
import { LoadingBlocker } from "../loading-blocker";

export const CustomForm = ({
  form,
  values,
  setFieldValue,
  handleChange,
  errors,
  isLoading,
}: NShared.TCustomForm) => {
  return (
    <LoadingBlocker {...{ isLoading }}>
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
    </LoadingBlocker>
  );
};
