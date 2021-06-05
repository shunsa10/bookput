import React from "react";
import styled, { css } from "styled-components";
import { sp, tab } from "../media";


const HomeTab: React.FC = () =>  {
    return (
<TabDiv>
    <Tab1Div>
        <Tab1Text>マイプット</Tab1Text>
    </Tab1Div>
    <Tab2Div>
        <Tab2Text>ログイン</Tab2Text>
    </Tab2Div>
</TabDiv>
    );
};


export default HomeTab

const TabDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7vh;
  display: flex;
  backdrop-filter: blur(10px);
  z-index: 10;
  display: none;
  ${sp`
display: flex;
`}
`;

const Tab1Div = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(155, 141, 141, 0.3);
`;

const Tab2Div = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(137, 204, 206, 0.3);
`;

const Tab1Text = styled.h4 `
text-align: center;
color: #fff;
`

const Tab2Text = styled.h4`
  text-align: center;
  color: #fff;
`;