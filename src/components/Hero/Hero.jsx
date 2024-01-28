import { BiMapPin, BiSolidTimeFive } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroItem,
  HeroList,
  HeroListDesk,
  HeroSubtitle,
  HeroTitle,
  HeroWrap,
} from "./Hero.styled";

const HeroComponent = () => {
  return (
    <HeroContainer id="home">
      <HeroWrap>
        <HeroTitle>Your favourite food delivered hot & fresh</HeroTitle>
        <HeroDescription>
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
          marinating, so you can cook a fresh homemade dinner in just 15
          minutes.
        </HeroDescription>
        <HeroButton type="button">Order Now</HeroButton>
        <HeroList>
          <HeroItem>
            <BiSolidTimeFive size={25} />
            <HeroSubtitle>Today 10:00 am - 7:00 pm</HeroSubtitle>
            <HeroListDesk>Working hours</HeroListDesk>
          </HeroItem>
          <HeroItem>
            <BiMapPin size={25} />
            <HeroSubtitle>Velyka Vasylkivska 100</HeroSubtitle>
            <HeroListDesk>Get Directions</HeroListDesk>
          </HeroItem>
          <HeroItem>
            <IoMdCall size={25} />
            <HeroSubtitle>+38 (063)833 24 15</HeroSubtitle>
            <HeroListDesk>Call Online</HeroListDesk>
          </HeroItem>
        </HeroList>
      </HeroWrap>
    </HeroContainer>
  );
};

export default HeroComponent;
