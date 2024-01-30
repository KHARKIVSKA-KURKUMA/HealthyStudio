import styled from "styled-components";
import UncontrolledExample from "./UncontrolledExample";
import {
  aboutBg,
  descriptionColor,
  desktop,
  mobile,
  subtitleColor,
  tablet,
  titleColor,
} from "../../variables/variables";

const Container = styled.div`
  max-width: 1110px;
  background-color: ${aboutBg};
  margin: 0 auto;
  padding-bottom: 90px;
  border-radius: 5px;
  position: relative;
  padding-top: 68px;
  transform: translateY(-240px);
  ${mobile} {
    padding-top: 80px;
  }
  ${tablet} {
    padding-top: 68px;
  }
  ${desktop} {
    padding-top: 95px;
  }
`;
const AboutTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 2;
  position: relative;
  letter-spacing: 0.2em;
  color: ${titleColor};
  z-index: 3;
  text-align: center;
  margin-bottom: 30px;
  ${mobile} {
    font-size: 22px;
  }
  ${tablet} {
    font-size: 30px;
  }
`;
const AboutSubtitle = styled.p`
  font-weight: 900;
  font-size: 50px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.2em;
  color: ${subtitleColor};
  text-transform: uppercase;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  ${mobile} {
    font-size: 70px;
  }
  ${desktop} {
    font-size: 100px;
  }
`;

const AboutDescription = styled.p`
  font-size: 14px;
  line-height: 1.88;
  text-align: center;
  color: ${descriptionColor};
  margin-bottom: 90px;
  ${tablet} {
    font-size: 16px;
  }
  ${desktop} {
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 70px;
  }
`;

const About = () => {
  return (
    <Container>
      <AboutTitle>The Basics Of Healthy Food</AboutTitle>
      <AboutSubtitle>About</AboutSubtitle>
      <AboutDescription>
        In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea
        aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim
        mollit voluptate irure esse aliquip.
      </AboutDescription>
      <UncontrolledExample />
    </Container>
  );
};

export default About;
