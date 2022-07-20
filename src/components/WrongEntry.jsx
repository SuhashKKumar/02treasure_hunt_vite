import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/WrongEntry.css'
import Button from "@mui/material/Button";
import Footer from './Footer'
const WrongEntry = ({pathName}) => {
    const navigate=useNavigate()
    const NavigateToHome =()=>{
        navigate('/')
    }
  return (
    <div className='homepage_parent wrong_entry' >
        <h1>Oops!</h1>
        <h2> The treasure isn't with {pathName}</h2>
        <Button style={{width:'20%'}} onClick={NavigateToHome} >Continue Hunting</Button>
        <Footer/>
    </div>
    
  )
}

export default WrongEntry