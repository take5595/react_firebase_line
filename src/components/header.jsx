import classes from '../styles/header.module.css'
// import react
import React from 'react'
import Link from 'next/link'


export  function Header() {
    return (
    
    <header className={classes.header}>
        <div>チャットツール</div>
        {/* <Link href="/about">
            about
        </Link>
        <p>/</p>
        <Link href="/">
            index
        </Link> */}
    </header>
        
      
    )
  }
  