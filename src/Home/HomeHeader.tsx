import React from "react";
import styled, { css } from "styled-components";
import { sp, tab } from "../media";



const HomeHeader: React.FC = () => {
  return (
    <Headers>
      <Logo href="#" className="logo">
        BOOKPUT
      </Logo>
      <NavUl>
        <Navli>マイプット</Navli>
        <Navli>ログイン</Navli>
        {/* <Navli></Navli> */}
      </NavUl>
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

/////////////////////////////////////////////
const NavUl = styled.ul`
  position: relative;
  left: -3vw;
  display: flex;
  ${sp`
  display: none;
`}
`;

const Navli = styled.li`
  list-style: none;
  margin-left: 15px;
  color: #fff;
  font-weight: 700;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 0;
`;

/////////////////////////////////////////////
