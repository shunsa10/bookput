import React from 'react'
import { Card, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import styled, { css } from "styled-components";
import { sp, tab } from "../../media";
const useStyles = makeStyles({
  card: {
    width: "300px",
    padding: "15px",
    margin: "10px",
  },
  cardButton: {
    position: "relative",
    top: "1.1rem",
    left: "5%",
  },
  cardChat: {
    position: "relative",
    left: ".5rem",
    top: ".5rem",
    width: "70%",
    background: "#f5f5f5",
  },
});

const ChatItem:React.FC= () => {
  const classes = useStyles();
  return (

      <UserChatDiv>
        <ChatDivText>
         
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
          <Card className={classes.card}>
            <Typography>textdddddddddddddd</Typography>
            <Typography>heydddddddddd</Typography>
          </Card>
        </ChatDivText>
        <ChatDivForm>
          <ChatForm>
            <TextField className={classes.cardChat} variant="outlined" />
            <Button className={classes.cardButton} variant="contained">
              チャット
            </Button>
          </ChatForm>
        </ChatDivForm>
      </UserChatDiv>
   
  );
};

export default ChatItem;


const ChatDivText = styled.div`
 
`;


const ChatDivForm = styled.div`
  width: 80%;
  height: 10%;
  background-color: #eeeeee;
  position: absolute;
  bottom: 1rem;
  ${tab`
width: 90%;
`}
  ${sp`
width: 100%;
`}
`;


const ChatForm = styled.form`



`

const UserChatDiv = styled.div`
  width: 100%;
  height: 40%;
  background-color: #868282;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ${tab`
 width: 100%;
 
`}
  ${sp`
 width: 100%;
 
`}
`;