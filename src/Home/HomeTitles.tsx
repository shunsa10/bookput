import React from "react";
import styled, { css } from "styled-components";
// import img4 from './assets/img/img4.jpg'
import { StyleHomeContext } from "../Context/StyleHomeContext";
import { useContext } from "react";
import { sp, tab } from "../media";

type ToggleProps = {
  styles?: boolean;
};

const HomeTitles: React.FC = () => {
  const [styles] = useContext(StyleHomeContext);
  return (
    <>
      <DivContent styles={styles ? true : false}>
        <IconDiv>
          <IconWapDiv>
            <IconImg src="./img/home/bookput5.png" />
          </IconWapDiv>
        </IconDiv>
        <PRDiv>
          <PRWapDiv>
            <PRH3>YOU ONLY LIVE ONCS.</PRH3>
            <PRp>
              Bookputは、本を読むあなたにOUTPUTし、共有する場を提供します。
              <br />
              本の内容は行動に移してこそ真価を発揮する。本の価値を引き上げます。
              <br />
              実際に人に聞いたり見たりしてもらう事で、定着し他の人のOUTPUTも
              <br />
              知識として取り入れることができます。
              <br />
              あなたの中に眠る使いたい知識はありますか？
              <br />
              <br />
              YOU ONLY LIVE ONCS.
              <br />
              人生一度きり。
            </PRp>
          </PRWapDiv>
        </PRDiv>
      </DivContent>
      <Img src={"./img/home/mainImg2.jpeg"} alt="" />
    </>
  );
};
export default HomeTitles;

const DivContent = styled.div<ToggleProps>`
  position: relative;
  display: flex;

  z-index: 10;
  /* background-color: #1f7dcf; */
  height: 75vh;
  width: 100%;
  text-align: center;
  transition: 0.5s;
  transition-delay: 1s;
  top: 8rem;
  ${sp`
  flex-direction: column;
  `}
  ${({ styles }) =>
    styles
      ? css`
          opacity: 0;
          visibility: hidden;
          transform: translateX(-200px);
          transition-delay: 0s;
        `
      : ""}
`;
const IconDiv = styled.div`
  width: 50%;
  height: 100%;
  ${sp`
  width: 100%;
  height: 45rem;
  `}
`;
const IconWapDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  ${sp`
  width: 90%;
  margin: 0 auto;
  `}
`;

const IconImg = styled.img`
  position: relative;
  bottom: 2.5rem;
  width: 85%;
  height: 75%;
  mix-blend-mode: multiply;
  height: auto;
`;

/////////////////////////////////////////

const PRDiv = styled.div`
  width: 50%;
  height: 100%;
  ${tab`
  position: relative;
  top: 5rem;
  height: 80%;
  `}
  ${sp`
  position: relative;
  top: -7rem;
  width: 100%;
 
  `}
`;

const PRWapDiv = styled.div`
  width: 95%;
  height: 70%;
  z-index: 1;
  ${sp`
   width: 100%;
`}
`;

const PRH3 = styled.h3`
  font-size: 2.5rem;
  text-align: left;
  color: #fff;
  ${tab`
  font-size: 1.8rem;
`}
  ${sp`
   font-size: 1.4rem;
    text-align:center;
  `}
`;

const PRp = styled.p`
  font-size: 0.9rem;
  text-align: left;
  line-height: 2rem;
  color: #fff;
  ${tab`
  font-size: .8rem;
`}
  ${sp`
  font-size: .8rem;
   line-height: 1.7rem;
   text-align:center;
`}
`;



const Img = styled.img`
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
