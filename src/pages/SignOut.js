import React from 'react'
import {Button} from '@mui/material'
import {auth} from '../components/firebase.js'
import styles from '@/styles/Home.module.css'


function SignOut() {
  return (
    <div className={styles.titlebox}>
        <div className={styles.title}>chat message</div>

        <Button
        onClick={()=>auth.signOut()}
        >サインアウト</Button>
    </div>
  )
}

export default SignOut