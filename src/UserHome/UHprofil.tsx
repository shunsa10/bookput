import React from "react";
import styled, { css } from "styled-components";
import { sp, tab } from "../media";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        color: "#fff",
      },
    },
  })
);

const UHprofil: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <ProfilDivWap>
        <ProfilDiv>
          <ProfilImgDiv>
            <ProfilImg />
          </ProfilImgDiv>
          <ProfilContentDiv>
            <ProfilNameDiv>
              <ProfilName>shun sato</ProfilName>
              <Div>
                <Button variant="outlined" className={classes.root}>
                  変更
                </Button>
              </Div>
            </ProfilNameDiv>
            <ProfilTextDiv>
              <ProfilText>
                ダミーテキスト ダミーテキストダミーテキスト ダミーダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト
              </ProfilText>
            </ProfilTextDiv>
            <FFWdiv>
              <Fp>?フォロー</Fp>
              <FWp>?フォロワー</FWp>
            </FFWdiv>
          </ProfilContentDiv>
        </ProfilDiv>
      </ProfilDivWap>
    </>
  );
};

export default UHprofil;

const ProfilDivWap = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  background-image: url("./img/userhome/ProfilWap.jpeg");
  background-position: center;
  background-size: cover;
`;

const ProfilDiv = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
  margin: 0 auto;
  backdrop-filter: blur(15px);
  z-index: 1;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  ${tab`
width: 80%;
`}
  ${sp`
width: 100%;
`}
`;

const ProfilImgDiv = styled.div`
  width: 30%;
  height: 100%;
  background-color: #a52a2a68;
  ${tab`
width: 35%;
`}
  ${sp`

`}
`;

const ProfilImg = styled.img`
  background: #f0e0f0;
  width: 150px;
  height: 150px;
  position: relative;
  top: 25px;
  left: 30px;
  ${tab`
top: 35px;
`}
  ${sp`
left: 10px;
top: 50px;
 width: 130px;
  height: 130px;
`}
`;
//////////////////////////////////////////////////
const ProfilContentDiv = styled.div `
width: 70%;
height: 100%;

`

const ProfilNameDiv = styled.div`
  display: flex;
  height: 30px;
  
`;

const ProfilName = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-left: 2rem;
  ${tab`
font-size: 1.7rem;
position: relative;
top: .5rem;
`}
  ${sp`
font-size: 1.5rem;
position: relative;
  top: 1rem;
`}
`;

const Div = styled.div`
  position: relative;
  top: 2.5rem;
  margin-left: 30%;
`;


///////////////////////////////////////////////////////

const ProfilTextDiv = styled.div`
  width: 100%;
`;


const ProfilText = styled.p`
  /* position: relative;
  top: 2rem; */
  margin: 0 2rem;
  margin-top: 3rem;
  color: #fff;
  width: 90%;

  ${tab`

`}
  ${sp`
margin-right: 1rem;
`}
`;

///////////////////////////////////////////////////////

const FFWdiv = styled.div`
  display: flex;
  position: relative;
  top: 1.5rem;
  ${tab`
top: -.5rem;
`}
  ${sp`
top: -.5rem;
`}
`;

const Fp = styled.p`
  margin-left: 2rem;
  color: #fff;
`;

const FWp = styled.p`
  margin-left: 2rem;
  color: #fff;
`;
