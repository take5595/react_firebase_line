import React, { useState } from 'react'

import { db ,auth} from '../components/firebase';
import firebase from "firebase/compat/app"
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SendAndArchiveOutlined } from '@mui/icons-material';



function SendMessage() {

  const [message,setMessage] = useState("");
  
  function sendMessage(e){
    e.preventDefault();

    const {uid,photoURL} =auth.currentUser;

    db.collection("line").add({
      text:message,
      photoURL,
      uid,
      createdAt:firebase.firestore.FieldValue.serverTimestamp()
      
    });
    setMessage("");
  }
  
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div style={{display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height:"7vh"}}>
          <Input
          style={{width:"90%"}}
          placeholder="messageを入力してください"
          type ="text" 
          onChange={(e)=>setMessage(e.target.value) }
          value={message}
          />
          <SendIcon onClick={sendMessage}></SendIcon>

        </div>
      </form>
    </div>
  )
}

export default SendMessage