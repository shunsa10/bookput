import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled, { css } from "styled-components";
import { sp, tab } from "../media";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "100%",
        color: "#fff",
      },
    },
  })
);

const useStylesButton = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        height: "85px",
        width: "100%",
        color: "#fff",
        // background: "linear-gradient(45deg, #3f88db 30%, #53e5ff 90%)",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 20,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        padding: "0 30px",
      },
    },
  })
);


const DateTotime:React.FC = () => {
    const classes = useStyles();
    const classesButton = useStylesButton();
    const [value, setValue] = React.useState("初期値");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <NewgroupDiv>
        <ChachPDiv>
          <ChachPh3>行動こそ人生の始まり</ChachPh3>
        </ChachPDiv>
        <NewgroupForm className={classes.root} noValidate autoComplete="off">
          <NewNameContentDiv>
            <TextField
              id="standard-multiline-flexible"
              label="グループ名"
              multiline
              rowsMax={4}
              value={value}
              onChange={handleChange}
            ></TextField>
          </NewNameContentDiv>
        </NewgroupForm>
        <NewgroupForm className={classes.root} noValidate autoComplete="off">
          <NewNameContentDiv>
            <TextField
              id="standard-multiline-static"
              label="テーマ内容"
              multiline
              rows={4}
              defaultValue=""
            ></TextField>
          </NewNameContentDiv>
        </NewgroupForm>
        <NewgroupForm className={classes.root} noValidate autoComplete="off">
          <NewNameContentDiv>
            <TextField
              id="outlined-textarea"
              label="あなたのアウトプット"
              placeholder="アウトプット"
              multiline
              variant="outlined"
            ></TextField>
          </NewNameContentDiv>
        </NewgroupForm>
        <NewgroupForm className={classes.root} noValidate autoComplete="off">
          <NewNameContentDiv>
            <TextField
              id="outlined-textarea"
              label="あなたのアウトプットする本"
              placeholder="book name"
              multiline
              variant="outlined"
            ></TextField>
          </NewNameContentDiv>
        </NewgroupForm>
        <NewgroupForm className={classes.root} noValidate autoComplete="off">
            <NewNameContentDiv>
              <TextField
                id="standard-multiline-static"
                label="あなたのアウトプットする内容"
                multiline
                rows={4}
                defaultValue=""
              ></TextField>
            </NewNameContentDiv>
        </NewgroupForm>
          <Link to="UserHome" style={{ textDecoration: "none" }}>
        <NewGroupDiv2 className={classesButton.root}>
          <Button variant="outlined">新しいグループを作成</Button>
        </NewGroupDiv2>
          </Link>
      </NewgroupDiv>
    );
};

export default DateTotime;

const ChachPDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  border-radius: 10px;
  background: linear-gradient(45deg, #acacac 30%, #ccced3 60%, #eeeeee 90%);
  text-align: center;
  z-index: 10;
`;
const Span = styled.span  `
color: #fff;

`

const ChachPh3 = styled.h3 `
letter-spacing: 3px;
font-size: 1.5rem;
`


const NewgroupDiv = styled.div`
  width: 90%;
  height: 100vh;
  padding: 30px 0;
  padding-bottom: 150px;
  margin: 0 auto;
  background-image: url("./img/group/groupCreate1.jpeg");
  background-color: #c4c4c4;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
  &:before {
    content: "";
    background: inherit; 
    /* -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px); */
    filter: blur(8px);
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1; /*重なり順序を一番下にしておく*/
  }

  ${tab`
 width: 100%;
`}
  ${sp`
width: 100%;
`}
`;

const NewgroupForm = styled.form`
margin: 0 auto;
margin-top: 2rem;
  width: 70%;
align-items: center;
z-index: 1;
`;

const NewNameContentDiv = styled.div`
  margin: 0 auto;
`;


const NewGroupDiv2 = styled.div`
  width: 60%;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;  
`;
