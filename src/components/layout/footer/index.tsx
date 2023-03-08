import { Col, Container, FormGroup, Row } from "react-bootstrap";
import {
  Caption,
  Icons,
  Info,
  Media,
  ScheduleContainer,
  StyledFooter,
  Title,
} from "./styles";

import { PhoneNumbers } from "@utils/enums";
import { formatPhoneNumber } from "@helpers/useful-functions";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row md="3">
          <Col md="4">
            <Title>Contact:</Title>
            <FormGroup>
              <Caption>Phone:</Caption>
              <Info {...{ href: `tel:${PhoneNumbers.Contact}` }}>
                {formatPhoneNumber(PhoneNumbers.Contact)}
              </Info>
            </FormGroup>
            <FormGroup>
              <Caption>Address:</Caption>
              <Info>Poznań - ul. os. Bolesława Chrobrego 10</Info>
            </FormGroup>
          </Col>
          <Col md="4">
            <Title>Open:</Title>
            <ScheduleContainer>
              <Info>Mon-Sat: 12-22</Info>
              <Info>Sun: 12-20</Info>
            </ScheduleContainer>
          </Col>
          <Col md="4">
            <Title>Find us:</Title>
            <Col>
              <Media href="https://www.facebook.com/WarungSumatraPoznan">
                <AiFillFacebook {...{ style: { fontSize: "2rem" } }} />
              </Media>
              <Media>
                <AiFillInstagram {...{ style: { fontSize: "2rem" } }} />
              </Media>
            </Col>
            <Col>
              <div>
                <Media href="https://glovoapp.com/pl/pl/poznan/warung-sumatra-poz/?utm_campaign=maplinks&utm_medium=organic&utm_source=googlemaps">
                  <Icons>Glovo</Icons>
                </Media>
                <span
                  style={{ fontSize: "1.3rem", color: "white", margin: "5px" }}
                >
                  /
                </span>
                <Media href="https://www.ubereats.com/pl/store/warung-sumatra/i7FeMEetTZ-_dJpSiqyGyg?utm_campaign=place-action-link&utm_medium=organic&utm_source=google">
                  <Icons>Uber Eats</Icons>
                </Media>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};
