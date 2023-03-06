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

import { setColumnsNumber } from "./utils";
import { CustomContainer } from "@components/shared";
import { useMenuService } from "./service";

export const Menu = () => {
  const { menu } = useMenuService();
  return (
    <CustomContainer>
      <Container>
        <CardGroup>
          <Row md={setColumnsNumber(menu?.length)}>
            {menu.map(({ category, description, image, name, price }) => (
              <Col key={crypto.randomUUID()}>
                <Card
                  style={{
                    marginTop: "15px",
                  }}
                >
                  <CardImg alt={name} src={image} top />
                  <CardBody>
                    <CardTitle tag="h4">{category?.label}</CardTitle>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {price}
                    </CardSubtitle>
                    <CardText>{description.slice(0, 100)}...</CardText>
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
