import React from "react";
import styled, { css } from "styled-components";
import { useContext } from "react";
import { StyleHomeContext } from "../Context/StyleHomeContext";
import { sp, tab } from "../media";

type ToggleProps = {
  styles?: boolean;
};

const HomeHeader: React.FC = () => {
  const [styles, setStyles] = useContext(StyleHomeContext);

  return (
    <Headers>
      <Logo href="#" className="logo">
        BOOKPUT
      </Logo>
      <Toggle
        styles={styles ? true : false}
        onClick={() => setStyles(!styles)}
      ></Toggle>
    </Headers>
  );
};

export default HomeHeader;

const Headers = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 50px;
  z-index: 10;
  box-sizing: border-box;
  ${tab`
  padding: 20px;
`}
`;

const Logo = styled.a`
  position: relative;
  font-size: 2em;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  z-index: 2;
`;

const Toggle = styled.div<ToggleProps>`
  position: relative;
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("./img/menu.png");
  ${sp`
   left: 35px;
   top: -3px
`}

  ${({ styles }) =>
    styles
      ? css`
          background-image: url("./img/close.png");
          background-position: center;
          background-repeat: no-repeat;
          cursor: pointer;
          background-size: 30px;
        `
      : ""}

    
    z-index: 3;
  &:before {
    content: "Menu";
    position: absolute;
    right: 45px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-size: 14px;
    padding: 2px 5px;
    background-color: #fff;
    color: #111;
  }
`;
