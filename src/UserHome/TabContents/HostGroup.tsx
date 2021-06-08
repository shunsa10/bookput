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
        // background: "linear-gradient(45deg, #3f88db 30%, #53e5ff 90%)",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        padding: "0 30px",
      },
    },
  })
);


const HostGroup: React.FC = () => {
    const classes = useStyles();

    return (
      <>
        <ContentDiv2>
          <Link to="CreateGroup" style={{ textDecoration: "none" }}>
            <NewGroupDiv2 className={classes.root}>
              <Button variant="outlined">新しいグループを作成</Button>
            </NewGroupDiv2>
          </Link>
          <GroupDiv2>
            <GroupSTdiv2>
              <Grouptitle2>
                村上春樹が変えた日本のいくつかのこと、8時からの営業になること
              </Grouptitle2>
              <GroupStatus2>ホスト</GroupStatus2>
            </GroupSTdiv2>
            <GroupTextDiv2>
              <GroupText2>
                村上春樹が日本人にあたえた影響って色々あると思うんですね。
                ①日本人の文体が変わった
                これは以前にも書きましたが、本当に「がらっ」と変わりま
              </GroupText2>
            </GroupTextDiv2>
            <GroupDetails2>
              <GroupDetailsName2>Shun Sato</GroupDetailsName2>
              <GroupDetailsStart2>6.26 20:30からスタート</GroupDetailsStart2>
            </GroupDetails2>
          </GroupDiv2>
          <GroupDiv2>
            <GroupSTdiv2>
              <Grouptitle2>
                村上春樹が変えた日本のいくつかのこと、8時からの営業になること
              </Grouptitle2>
              <GroupStatus2>ホスト</GroupStatus2>
            </GroupSTdiv2>
            <GroupTextDiv2>
              <GroupText2>
                村上春樹が日本人にあたえた影響って色々あると思うんですね。
                ①日本人の文体が変わった
                これは以前にも書きましたが、本当に「がらっ」と変わりま
              </GroupText2>
            </GroupTextDiv2>
            <GroupDetails2>
              <GroupDetailsName2>Shun Sato</GroupDetailsName2>
              <GroupDetailsStart2>6.26 20:30からスタート</GroupDetailsStart2>
            </GroupDetails2>
          </GroupDiv2>
          <MenuWapDiv>
            <MenuDiv>
              <MenuIcon1>
                <BiBook size={30} color="#fff" />
              </MenuIcon1>
              <MenuIcon2>
                <BiZoomIn size={30} color="#fff" />
              </MenuIcon2>
              <MenuIcon3>
                <BiHomeAlt size={30} color="#fff" />
              </MenuIcon3>
            </MenuDiv>
          </MenuWapDiv>
        </ContentDiv2>
      </>
    );
};
export default HostGroup;

const ContentDiv2 = styled.div`
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

const NewGroupDiv2 = styled.div`
  width: 90%;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;  
`;

const GroupDiv2 = styled.div`
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

const GroupSTdiv2 = styled.div`
  display: flex;

  ${tab`
flex-direction: column-reverse;
`}
  ${sp`
flex-direction: column-reverse;
`}
`;
const Grouptitle2 = styled.h3`
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
const GroupStatus2 = styled.div`
  margin-top: 1rem;
  margin-left: 5%;
  margin-right: 5px;
  color: #fff;
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
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

const GroupTextDiv2 = styled.div`


`

const GroupText2 = styled.p `
margin: 0 30px;
`
//////////////////////////////////

const GroupDetails2 = styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 1rem;
  ${tab`
 margin-top: 1rem;
`}
  ${sp`

`}
`;

const GroupDetailsName2 = styled.p`
color: gray;
`;

const GroupDetailsStart2 = styled.p`
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
  background: linear-gradient(10deg, #fe6b8b 30%, #ff8e53 90%);
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  ${tab`
width: 300px;


`}
  ${sp`
width: 250px;
`}
`;
const MenuIcon1 = styled.div `
width: 33%;
margin-top: 5px;

`
const MenuIcon2 = styled.div`
  width: 33%;
  margin-top: 5px;
`;
const MenuIcon3 = styled.div`
  width: 33%;
  margin-top: 5px;
`;