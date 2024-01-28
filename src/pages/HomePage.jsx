import styled from "styled-components";
import Header from "../components/Header/Header";
import { desktop } from "../variables/variables";
import Hero from "../components/Hero/Hero";

const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  ${desktop} {
    padding: 0 40px;
  }
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container></Container>
    </>
  );
};

export default HomePage;
