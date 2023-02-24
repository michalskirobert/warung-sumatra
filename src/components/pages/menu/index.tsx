import React from "react";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  Container,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";

import { INIT_MENU } from "./utils";
import { CustomContainer } from "@components/shared";

export const Menu = () => {
  return (
    <CustomContainer>
      <Container>
        <CardGroup>
          <Row md={5}>
            {INIT_MENU.map(({ desc, img, price, title }) => (
              <Col key={crypto.randomUUID()}>
                <Card
                  style={{
                    marginTop: "15px",
                  }}
                >
                  <CardImg alt={title} src={img} top />
                  <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {price}
                    </CardSubtitle>
                    <CardText>{desc.slice(0, 100)}...</CardText>
                    <Button>Read more</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </CustomContainer>
  );
};
