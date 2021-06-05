import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import styled, {css} from 'styled-components'
import {useContext} from 'react'
import {AccountContext} from '../Context/AccountContext'
import {useState} from 'react'
// import { auth } from "../firebase/config";
import {useHistory} from 'react-router-dom'
import {useAccountHooks} from './Hooks/AccountHooks'
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
   fontSize: '14px',
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


const Signup:React.FC = () => {
    const history = useHistory();
    const classes = useStyles();
    const [account, setAccount] = useContext(AccountContext);
    const username = useAccountHooks('');
    const email = useAccountHooks('');
    const password = useAccountHooks('');
    const [judgeF, setJudgeF] = useState("既存のアカウントを持っていますか？");
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    //     // ChangeEvent<HTMLInputElement> オーバーロードした
    //     //eventの型定義問題
    //     e.preventDefault();
    //     auth.createUserWithEmailAndPassword(email.value, password.value)
    //         //非同期処理成功時に実行
    //         .then((userCredential) => {
    //             if (userCredential.user === null)return; 
    //             //userがnullだったらリターンは返さない
    //            userCredential.user.updateProfile({ displayName: username.value })
    //            //コンパイルエラーが出て（？）をつけると解消される
    //             .then(() =>{
    //                 console.log('成功', userCredential);
    //                 history.push("/About");
    //             });
    //         })
    //         .catch((error) =>{
    //             console.log('失敗', error);
    //             setJudgeF('Sigupできませんでした。');
                
    //         })
        
    // }
    return (
      <SignupBxAC account={account ? true : false}>
        <SignupInfoAC account={account ? true : false}>
          <SignupForm>
            {/* onSubmit={handleSubmit} */}
            <SignupH2>Create an Account</SignupH2>
            <TextField
              className={classes.Input}
              // {...username}
              fullWidth
              label="ユーザー名"
              variant="standard"
            />
            <TextField
              className={classes.Input}
              // {...email}
              fullWidth
              label="メールアドレス"
              variant="outlined"
            />
            <TextField
              className={classes.Input}
              // {...password}
              fullWidth
              label="パスワード"
              variant="outlined"
            />
            <Button
              className={classes.Submit}
              type="submit"
              variant="contained"
            >
              Logup
            </Button>
            <SignupP>
              {judgeF}
              <SignupA
                account={account ? true : false}
                onClick={() => setAccount(!account)}
              >
                Sign In
              </SignupA>
            </SignupP>
          </SignupForm>
        </SignupInfoAC>
        <SignupImgDiv account={account ? true : false}>
          <SignupImgBxAC src={"./img/Account/account1.jpeg"} />
        </SignupImgDiv>
      </SignupBxAC>
    );
}

export default Signup;

const SignupBxAC = styled.div<AccountProps> `
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    pointer-events: none;
    ${({account}) => account ? css `
        pointer-events: initial;
    ` : ''}

`
const SignupInfoAC = styled.div<AccountProps>`
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
  left: 100%;
  ${tab`
  width: 100%;
`}
  ${sp`
  width: 100%;
`}
  ${({ account }) =>
    account
      ? css`
          left: 0;
        `
      : ""}
`;
const SignupImgDiv = styled.div<AccountProps>`
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
  left: -100%;
  ${tab`
  display: none;
`}
  ${sp`
  display: none;
`}
  ${({ account }) =>
    account
      ? css`
          left: 0;
        `
      : ""}
`;
const SignupImgBxAC = styled.img`
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
const SignupForm = styled.form `
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
const SignupH2 = styled.h2 `
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #555;
`
const SignupP = styled.p `
position: relative;
    margin-top: 20px;
    font: size 12px;
    font-weight: 300;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
`
const SignupA = styled.a<AccountProps> `
    text-decoration: none;
    font-weight: 600;
    color: #677eff;
    cursor: pointer;
      ${({account}) => account ? css `
       
    ` : ''}
    
`