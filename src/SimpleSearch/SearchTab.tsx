import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import CakeIcon from "@material-ui/icons/Cake";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import HomeIcon from "@material-ui/icons/Home";
import BusinessSearch from "./SearchContent/BusinessSearch ";
import CuisineSearch from "./SearchContent/CuisineSearch";
import LifeSearch from "./SearchContent/LifeSearch";
import PracticalSearch from "./SearchContent/PracticalSearch";

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

const useStyles1 = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
   
  },
});

export default function SearchTab() {
  const classes = useStyles();
  const classes1 = useStyles1();
   const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<LaptopMacIcon />} {...a11yProps(0)} label="ビジネス" />
        <Tab icon={<HomeIcon />} {...a11yProps(1)} label="生活" />
        <Tab icon={<CakeIcon />} {...a11yProps(2)} label="料理" />
        <Tab icon={<WbIncandescentIcon />} {...a11yProps(3)} label="実用書" />
      </Tabs>
    </Paper>
    <TabPanel value={value} index={0} dir={theme.direction}>
        <BusinessSearch />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
       <CuisineSearch />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
       <LifeSearch />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
       <PracticalSearch />
      </TabPanel>
      </>
  );
};


const TabDiv = styled.div`
`;

