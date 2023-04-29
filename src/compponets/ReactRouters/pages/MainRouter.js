import React from 'react'
import { HomePage } from './HomePage'
import { Login}  from './login'
import { Registration } from './Registration'
import {Routes,Route} from 'react-router-dom'





export const MainRouter = () => {
  return (

    <div>

      

      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path='Registration' element={<Registration/>} />

        <Route path='login' element={<Login />} />

     

      </Routes>
    

    </div>


  )
}
