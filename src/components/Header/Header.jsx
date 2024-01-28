import { Container, HeaderItem, HeaderLink, HeaderList } from "./Header.styled";
import Logotype from "./Logotype/Logotype";

const Header = () => {
  return (
    <Container>
      <Logotype />
      <HeaderList>
        <HeaderItem>
          <HeaderLink href="#menu">Menu</HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink href="#recipes">Recipes</HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink href="#chefs">Chefs</HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink href="#contact">Contacts</HeaderLink>
        </HeaderItem>
      </HeaderList>
    </Container>
  );
};

export default Header;
