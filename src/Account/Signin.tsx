import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useState, useEffect} from 'react'
import React from 'react';

import styled, {css} from 'styled-components'
import {useContext} from 'react'
import {AccountContext} from '../Context/AccountContext'
import {useHistory} from 'react-router-dom'
// import { useAccountHooks } from "./Hooks/AccountHooks";
import { sp, tab } from "../media";

const useStyles = makeStyles({
  Input: {
   position: 'relative',
   width: '100%',
   padding: '10px',
   background: '#f5f5f5',
   color: '#333',
   border: 'none',
   outline: 'none',
   boxShadow: 'none',
   margin: '8px 0',
   fontSize: '10px',
   letterSpacing: '1px',
   },

  Submit: {
    maxWidth: '100px',
    background: '#677eff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    letterSpacing: '1px',
    transition: '0.5s',
  },
});

type AccountProps = {
    account?: boolean
}

const Signin:React.FC = () => {
     const history = useHistory();
     const classes = useStyles();
     const [account, setAccount] = useContext(AccountContext);
    // const email = useAccountHooks('');
    // const password = useAccountHooks('');
  const [judge, setJudge] = useState("自分用のアカウントを作成しますか？");
     const [isSigninSuccess, setIsSigninSuccess] = useState(false);

    //  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    //     e.preventDefault();
    //     auth.signInWithEmailAndPassword(email.value, password.value)

    //     .then(() => {
    //         console.log("成功");
    //         setIsSigninSuccess(true) 
    //         // history.push('/About');

    //     })

    //     .catch((error) => {
    //         console.log('失敗', error);
    //         setJudge('ログインに失敗しました。');
    //     });
    //  };
     //レンダリングから逃れるための遅延
    //  useEffect(() => {
    //    if(isSigninSuccess){history.push("/About");}
    //  },[isSigninSuccess])
     
    return (
      <SigninBxAC>
        <SigninImgDiv account={account ? true : false}>
          <SigninImgBxAC src={"./img/Account/account2.jpeg"} />
        </SigninImgDiv>
        <SigninInfoAC account={account ? true : false}>
          <SigninForm>
            {/* onSubmit={handleSubmit} */}
            <SigninH2>Sign In</SigninH2>
            <TextField
              // {...email}
              className={classes.Input}
              fullWidth
              label="メールアドレス"
              variant="outlined"
            />
            <TextField
              // {...password}
              className={classes.Input}
              fullWidth
              label="パスワード"
              variant="outlined"
            />
            <Button
              type="submit"
              className={classes.Submit}
              variant="contained"
            >
              Login
            </Button>
            <SigninP>
              {judge}
              <SigninA
                account={account ? true : false}
                onClick={() => setAccount(!account)}
              >
                Sign Up
              </SigninA>
            </SigninP>
          </SigninForm>
        </SigninInfoAC>
      </SigninBxAC>
    );
    console.log(account, setAccount);
    
}

export default Signin;

const SigninBxAC = styled.div `
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;

`
const SigninImgDiv = styled.div<AccountProps>`
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
  left: 0%;
  ${tab`
  display: none;
`}
  ${sp`
  display: none;
`}
  ${({ account }) =>
    account
      ? css`
          left: -100%;
        `
      : ""}
`;

const SigninImgBxAC = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${tab`
  display: none;
`}
  ${sp`
  display: none;
`}
`;
//formをかこうdiv
const SigninInfoAC = styled.div<AccountProps>`
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
  top: -2rem;
  left: 0;
  ${tab`
  width: 100%;
`}
  ${sp`
  width: 80%;
`}
  ${({ account }) =>
    account
      ? css`
          left: 100%;
        `
      : ""}
`;
const SigninForm = styled.form `
position: relative;
    width: 80%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: 0.5s;
`
const SigninH2 = styled.h2 `
font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #555;
`
const SigninP = styled.p `
position: relative;
    margin-top: 20px;
    font: size 12px;
    font-weight: 300;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
`
const SigninA = styled.a<AccountProps> `
  text-decoration: none;
    font-weight: 600;
    color: #677eff;
    cursor: pointer;
    ${({account}) => account ? css `
       
    ` : ''}

`