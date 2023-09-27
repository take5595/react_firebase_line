import React from 'react'
import {Button} from '@mui/material'
import firebase from "firebase/compat/app"

import Styles from '@/styles/Home.module.css'
import {auth} from '../components/firebase.js'


function SignIn() {
  function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

  return (
    <div className={Styles.firstpage}>
      <div className={Styles.firstpagetitle}>chat message tool</div>
      <div>ログインしてください↓</div>
        <Button 
        onClick={signInWithGoogle}
        style={{
          fontSize: "1rem",
          width: "100%",
          // backgroundColor: "rgb(208, 222, 218)", // ボタンの背景色
          color: "gray", // テキストの色
          padding: "10px 20px", // パディング
          border: "none", // ボーダーを非表示
          borderRadius: "5px", // ボーダーの角丸
          cursor: "pointer", // ホバー時のカーソルスタイル
      }}>google login</Button>
    </div>
  )
}

export default SignIn