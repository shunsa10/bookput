import React from "react";
import HomeHeader from "./HomeHeader";
import HomeTab from './HomeTab'
import HomeTitles from "./HomeTitles";
import { StyleProvider } from "../Context/StyleHomeContext";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      animate={{  opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{  opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyleProvider>
        <Section>
          <HomeHeader />
          <HomeTitles />
          <HomeTab />
        </Section>
      </StyleProvider>
    </motion.div>
  );
};

export default Home;

const Section = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
  width: 100%;
  height: 100%;
`;
