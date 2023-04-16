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
import { CONSTANTS } from "@utils/index";
import { useAppSelector } from "@store/config";

export const Footer = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  return (
    <StyledFooter>
      <Container>
        <Row md="3">
          <Col md="4">
            <Title>{CONSTANTS.CONTACT_LABEL[language.value]}:</Title>
            <FormGroup>
              <Caption>{CONSTANTS.TRANSLATE[language.value].phone}:</Caption>
              <Info {...{ href: `tel:${PhoneNumbers.Contact}` }}>
                {formatPhoneNumber(PhoneNumbers.Contact)}
              </Info>
            </FormGroup>
            <FormGroup>
              <Caption>{CONSTANTS.TRANSLATE[language.value].address}:</Caption>
              <Info>Poznań - ul. os. Bolesława Chrobrego 10</Info>
            </FormGroup>
          </Col>
          <Col md="4">
            <Title>{CONSTANTS.TRANSLATE[language.value].open}:</Title>
            <ScheduleContainer>
              <Info>
                {CONSTANTS.TRANSLATE[language.value].openTimeMonToSat}
              </Info>
              <Info> {CONSTANTS.TRANSLATE[language.value].openTimeSun}</Info>
            </ScheduleContainer>
          </Col>
          <Col md="4">
            <Title>{CONSTANTS.TRANSLATE[language.value].findUs}:</Title>
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
