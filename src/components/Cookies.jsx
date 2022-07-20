import React,{useState} from 'react'
import '../styles/Cookies.css'
import Buttons from './Buttons';
const Cookies = ({cookies, setCookies}) => {
    const CookiesHandler=()=>{
      setCookies(!cookies)
    }
   
    const styles ={
        cookies:{
            display: cookies ? "flex" : "none",
             opacity: cookies ? "1" : "0",
            }
        }
  return (
    <div className='cookies_container' style={styles.cookies}>
        <div className='cookies' >
        <h3>Cookies</h3>
        <h4>Just Kidding, Keep Hunting</h4>
        <Buttons name='Continue Hunting' CookiesHandler={CookiesHandler} />
        </div>
    </div>
  )
}

export default Cookies