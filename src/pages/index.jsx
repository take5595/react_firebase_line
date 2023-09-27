import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import {Header} from '../components/header.jsx'
import {Footer} from '../components/footer.jsx'
import {Links} from '../components/links.jsx'
import { useCallback, useEffect, useState } from 'react'

import {collection,doc,getDocs, onSnapshot} from "firebase/firestore"
import  {useAuthState} from "react-firebase-hooks/auth"
import SignIn from "./SignIn.js"
import {auth,db} from "../components/firebase.js"
import Line from "./Line.js"



const inter = Inter({ subsets: ['latin'] })





export default function Home() {

  const [user] = useAuthState(auth);
  // const user = useAuthState(auth);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={`${styles.main} ${inter.className}`}>
        
        {/* <Header></Header> */}
        
        <div className={styles.line}>
          {/* {user ? <Line/> : <SignIn/>} */}
          <Line></Line>
        </div>
        {/* <SignIn></SignIn> */}


        {/* <Links></Links> */}
        {/* <Footer /> */}
      </main>
    </>
  )
}
