import styled from "styled-components";
import {
  accent,
  backgroundColor,
  desktop,
  tablet,
} from "../../variables/variables";
import Background from "../../img/hero-bg.jpg";

const HeroContainer = styled.div`
  margin: 0 auto;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const HeroWrap = styled.div`
  padding-top: 140px;
  padding-bottom: 300px;
  ${tablet} {
    padding-top: 180px;
    padding-bottom: 400px;
  }
`;

const HeroTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  line-height: 1.17;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  margin: 0 auto 16px;
  ${desktop} {
    font-size: 62px;
    max-width: 1100px;
    padding: 0 5px;
  }
`;

const HeroDescription = styled.p`
  font-size: 14px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: -0.2px;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin-bottom: 40px;
  ${tablet} {
    font-size: 16px;
    max-width: 595px;
    margin: 0 auto 40px;
  }
`;

const HeroButton = styled.button`
  margin: 0 auto;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.23;
  text-align: center;
  letter-spacing: 0.2em;
  color: ${backgroundColor};
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background-color: ${accent};
  margin-bottom: 70px;
  border: transparent;
  border-radius: 43px;
  @include desktop {
    padding: 25px 55px;
  }
`;

const HeroList = styled.ul`
  :last-child {
    margin-bottom: 0;
  }
  ${tablet} {
    display: flex;
    gap: 50px;
  }
  ${desktop} {
    gap: 90px;
    justify-content: space-evenly;
  }
`;

const HeroItem = styled.li`
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.88;
  text-align: center;
  margin-bottom: 2px;
  margin-top: 12px;
  ${tablet} {
    font-size: 16px;
  }
`;

const HeroListDesk = styled.p`
  font-size: 18px;
  line-height: 1.2;
  mix-blend-mode: normal;
  opacity: 0.5;
  ${tablet} {
    font-size: 14px;
  }
`;

export {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroItem,
  HeroList,
  HeroListDesk,
  HeroSubtitle,
  HeroTitle,
  HeroWrap,
};
