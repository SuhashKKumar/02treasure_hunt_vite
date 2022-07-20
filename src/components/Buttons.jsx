import Button from "@mui/material/Button";
import '../styles/Buttons.css'
import React,{useState} from 'react'

const Buttons = ({name, className, CookiesHandler}) => {
  // const [cookies, setCookies]=useState(false)
  //   const CookiesHandler=()=>{
  //     setCookies(!cookies)
  //   }
  return (
    <Button onClick={CookiesHandler} className={className}>{name}</Button>
  )
}

export default Buttons