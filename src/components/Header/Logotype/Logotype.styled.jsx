import styled from "styled-components";
import {
  accent,
  backgroundColor,
  borderColor,
} from "../../../variables/variables";

const LogoWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 10px;
  cursor: pointer;
  svg {
    transform: translateY(-2px) translateX(-4px);
  }
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 15px;
  z-index: 100000;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${accent};
  }
  &:checked + span:before {
    transform: translateX(10px);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${borderColor};
  transition: 0.4s;
  border-radius: 20px;
  cursor: pointer;
  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 1px;
    bottom: 1px;
    background-color: ${backgroundColor};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const LogoTitle = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.5cap;
  padding-top: 10px;
  color: ${accent};
`;

const LeafsSvg = styled.svg`
  position: absolute;
`;

export {
  LogoWrap,
  LogoTitle,
  LeafsSvg,
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
  SwitchSlider,
};
