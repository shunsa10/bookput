import React from 'react'
import SearchTab from './SearchTab'
import styled, { css } from "styled-components";
import { sp, tab } from "../media";
const SimpleSearchMain: React.FC = () => {
    return (
        <>
       <TitleDiv>
           <Title>シンプルに探す</Title>
       </TitleDiv>
<SearchTab />
</>
    )
}

export default SimpleSearchMain;

const TitleDiv = styled.div `
width: 100%;

` 

const Title = styled.h2`
  text-align: center;
  letter-spacing: 0.8rem;
  font-size: 2.5rem;
  font-weight: 900;
  ${tab`
font-size: 2rem;
letter-spacing: 0.5rem;
`}
  ${sp`
font-size: 1.7rem;
letter-spacing: 0.4rem;
`}
`; 