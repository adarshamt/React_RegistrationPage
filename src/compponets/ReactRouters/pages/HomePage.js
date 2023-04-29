import React from 'react'
import './home.css'
import {useNavigate} from'react-router-dom'

export const HomePage = () => {
  const link =useNavigate()
  return (

    <div style={{textAlign:"center",fontSize:"50px"}} className='home_main_div'>

   <h1> WELCOME TO HOME PAGE</h1>

  < button className='Register_btn' style={{marginTop:"370px"}} onClick={()=>link('/Registration')} >  Register  </button> 


    </div>
  )
}
