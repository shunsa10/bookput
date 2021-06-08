// import React from "react";

// const UHtab: React.FC = () => {
//   return <></>;
// };

// export default UHtab;
import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import HostGroup from './TabContents/HostGroup'
import JoinGroup from './TabContents/JoinGroup'
import PastGroup from './TabContents/PastGroup'

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

export default function UhTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

  return (
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
          <Tab label="MY Group" style={{ padding: "0" }} {...a11yProps(0)} />
          <Tab label="Join Group" style={{ padding: "0" }} {...a11yProps(1)} />
          <Tab label="past　group" style={{ padding: "0" }} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <HostGroup />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <JoinGroup />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PastGroup />
      </TabPanel>
    </TabDiv>
  );
}
const TabDiv = styled.div`
`;
