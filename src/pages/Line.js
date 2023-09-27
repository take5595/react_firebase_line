import React, { useState } from 'react'
import SignOut from './SignOut.js'
import SendMessage from './SendMessage.js'

// useEffect
import {useEffect} from 'react'

// db
import {db} from './firebase.js'

// css
import Style from '@/styles/Home.module.css'

function Line() {
    const [messages,setMessages] = useState([]);
    useEffect(() => {
        db.collection("line")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()))
        })
    },[]);


  return (
    <div className={Style.signin}>

        <div className={Style.signout}>
            <SignOut></SignOut>
        </div>
        

        {/* DBにある文字を展開して描画 */}
        <div className={Style.linemain}>
            {messages.map(({id,text,photoURL,uid}) => (

                <div key={id}>
                   <p>{text}</p>
                </div>                
            ))}
        </div>
        
        <div className={Style.SendMessage}>
            <SendMessage></SendMessage>
        </div>
        

    </div>


  )
}

export default Line