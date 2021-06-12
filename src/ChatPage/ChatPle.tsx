import React from "react";
import styled, { css } from "styled-components";
import { sp, tab, pc } from "../media";
import Button from "@material-ui/core/Button";
import MyPutItem from "./Components/MyPutItem";
import ChatItem from "./Components/ChatItem";
import { Link } from "react-router-dom";

import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <TabDiv
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ width: "100%", padding: "0" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </TabDiv>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
 
}));


const ChatPle: React.FC = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
    
  return (
    <ChatWap>
      <ChatMainDiv>
        <ChatTitleDiv>
          <Title>
            <Link to="UserHome" style={{ textDecoration: "none" }}>
              <Button>戻る</Button>
            </Link>
            <TitleText>会話の「ルールについて</TitleText>
          </Title>
          <Day>
            <DayText>Start 6.17 19:30</DayText>
          </Day>
        </ChatTitleDiv>
        <UserDiv>
          <TabDiv className={classes.root} style={{ width: "100%" }}>
            <AppBar position="static" color="default" style={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                style={{ padding: "0" }}
              >
                <Tab label="Chat" style={{ padding: "0" }} {...a11yProps(0)} />
                <Tab
                  label="menberPuts"
                  style={{ padding: "0" }}
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <ChatItem />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <MyPutItem />
            </TabPanel>
          </TabDiv>
        </UserDiv>
      </ChatMainDiv>
    </ChatWap>
  );
};

export default ChatPle;



const ChatWap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatMainDiv = styled.div`
  width: 80%;
  height: 90%;
  margin: 0 auto;
  overflow: scroll;
  ${tab`
width: 90%;
`}
  ${sp`
width: 100%;
`}
`;
//////////////////////////////////////
const ChatTitleDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  background-color: #cde6dd;
  ${tab`

`}
  ${sp`
flex-direction: column;
height: 15%;
`}
`;
const Title = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  ${tab`
width: 70%;
`}
  ${sp`
width: 100%;
`}
`;
const TitleText = styled.h3 `
margin-left: 1rem;
`
const DayText = styled.p `

`
const Day = styled.div`
  width: 20%;
  height: 100%;
  color: gray;
  font-size: 0.9rem;
  font-weight: 800;
  position: relative;
  top: 0.6rem;
  ${tab`
width: 30%;
`}
  ${sp`
width: 100%;
margin-left: 5rem;
top: -1.5rem;
`}
`;
//////////////////////////////////////
const UserDiv = styled.div `
width: 100%;
height: 100%;
display: flex;

`

const TabDiv = styled.div`
  ${pc`

`}
`;
