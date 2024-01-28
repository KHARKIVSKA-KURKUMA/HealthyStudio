import styled from "styled-components";
import {
  accent,
  borderColor,
  tablet,
  textColor,
  transition,
} from "../../variables/variables";

const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${borderColor};
  padding: 20px 40px;
`;

const HeaderList = styled.ul`
  ${tablet} {
    display: flex;
    gap: 45px;
    padding-right: 11px;
    padding-top: 10px;
  }
`;

const HeaderItem = styled.li``;

const HeaderLink = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  color: ${textColor};
  transition: color ${transition};
  &:hover,
  &:focus {
    color: ${accent};
  }
`;
export { Container, HeaderItem, HeaderLink, HeaderList };
