import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { sp, tab } from "../../media";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BiBook } from "react-icons/bi";
import { BiZoomIn } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        height: "85px",
        width: "98.5%",
        color: "#fff",
        background: "linear-gradient(45deg, #50c2a6 30%, #3aee34 90%)",
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px #6eff694c",
        padding: "0 30px",
      },
    },
  })
);

const PastGroup: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <ContentDiv3>
        <NewGroupDiv3 className={classes.root}>
          {/* <CreateNewGroup>新しいグループを作成</CreateNewGroup> */}
          <Button variant="outlined">新しいグループを作成</Button>
        </NewGroupDiv3>
        <GroupDiv3>
          <GroupSTdiv3>
            <Grouptitle3>
              村上春樹が変えた日本のいくつかのこと、8時からの営業になること
            </Grouptitle3>
            <GroupStatus3>終了</GroupStatus3>
          </GroupSTdiv3>
          <GroupTextDiv3>
            <GroupText3>
              村上春樹が日本人にあたえた影響って色々あると思うんですね。
              ①日本人の文体が変わった
              これは以前にも書きましたが、本当に「がらっ」と変わりま
            </GroupText3>
          </GroupTextDiv3>
          <GroupDetails3>
            <GroupDetailsName3>Ben Jonson</GroupDetailsName3>
            <GroupDetailsStart3>6.36 20:30からスタート</GroupDetailsStart3>
          </GroupDetails3>
        </GroupDiv3>
        <MenuWapDiv>
          <MenuDiv>
            <MenuIcon1>
              <Link to="SimpleSearch" style={{ textDecoration: "none" }}>
                <BiBook size={30} color="#fff" />
              </Link>
            </MenuIcon1>
            <MenuIcon2>
              <Link to="WordSearch" style={{ textDecoration: "none" }}>
                <BiZoomIn size={30} color="#fff" />
              </Link>
            </MenuIcon2>
            <MenuIcon3>
              <Link to="UserHome" style={{ textDecoration: "none" }}>
                <BiHomeAlt size={30} color="#fff" />
              </Link>
            </MenuIcon3>
          </MenuDiv>
        </MenuWapDiv>
      </ContentDiv3>
    </>
  );
};
export default PastGroup;

const ContentDiv3 = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  ${tab`
width: 80%;
`}
  ${sp`
width: 90%;
`}
`;

const NewGroupDiv3 = styled.div`
  width: 90%;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
`;

const GroupDiv3 = styled.div`
  width: 90%;
  height: 200px;
  border-radius: 5px;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  background-color: #dad4d4;
  margin: 0 auto;
  margin-top: 30px;
  ${tab`
 height: 280px;
`}
  ${sp`
height: 300px;
`}
`;
/////////////////////////////////////

const GroupSTdiv3 = styled.div`
  display: flex;

  ${tab`
flex-direction: column-reverse;
`}
  ${sp`
flex-direction: column-reverse;
`}
`;
const Grouptitle3 = styled.h3`
  margin-left: 25px;
  font-weight: 800;
  letter-spacing: 1px;
  ${tab`
font-size: 1rem;
font-weight: 600;
`}
  ${sp`

`}
`;
const GroupStatus3 = styled.div`
  margin-top: 1rem;
  margin-left: 5%;
  margin-right: 5px;
  color: #fff;
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #50c2a6 30%, #3aee34 90%);
  height: 1.3rem;
  font-size: 0.9rem;
  width: 4rem;
  ${tab`
width: 3rem;


`}
  ${sp`
width: 3rem;
`}
`;
////////////////////////////////////

const GroupTextDiv3 = styled.div``;

const GroupText3 = styled.p`
  margin: 0 30px;
`;
//////////////////////////////////

const GroupDetails3 = styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 1rem;
  ${tab`
 margin-top: 1rem;
`}
  ${sp`

`}
`;

const GroupDetailsName3 = styled.p`
  color: gray;
`;

const GroupDetailsStart3 = styled.p`
  margin-left: 5%;
  color: gray;
`;

///////////////////////////////////////
const MenuWapDiv = styled.div`
  width: 70%;
  height: 40px;
  position: fixed;
  bottom: 20px;
  left: 15%;
  ${tab`

`}
  ${sp`
left: 16%;
`}
`;
const MenuDiv = styled.div`
  width: 400px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
  display: flex;
  border-radius: 20px;
  background: linear-gradient(45deg, #50c2a6 30%, #3aee34 90%);
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  ${tab`
width: 300px;


`}
  ${sp`
width: 250px;
`}
`;
const MenuIcon1 = styled.div`
  width: 33%;
  margin-top: 5px;
`;
const MenuIcon2 = styled.div`
  width: 33%;
  margin-top: 5px;
`;
const MenuIcon3 = styled.div`
  width: 33%;
  margin-top: 5px;
`;
