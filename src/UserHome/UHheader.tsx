import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { sp, tab } from "../media";

const UHheader: React.FC = () => {
  return (
    <Headers>
      <Logo href="#" className="logo">
        BOOKPUT
      </Logo>
      <NavUl>
        <Link to="UserHome" style={{ textDecoration: "none" }}>
          <Navli>マイプット</Navli>
        </Link>
        <Link to="Account" style={{ textDecoration: "none" }}>
          <Navli>探す</Navli>
        </Link>
        <Link to="./" style={{ textDecoration: "none" }}>
          <Navli>トップへ</Navli>
        </Link>
        {/* <Navli></Navli> */}
      </NavUl>
    </Headers>
  );
};

export default UHheader;

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px;
  background-color: #37888175;
  z-index: 10;
  box-sizing: border-box;

  backdrop-filter: blur(15px);
  z-index: 1;
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
