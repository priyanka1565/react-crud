import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './Register';
import GetUserInfo from './GetUserInfo';
const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Register/> }></Route>
          <Route path='/getuserinfo' element={< GetUserInfo />} />
          
      </Routes>
    </div>
  )
}

export default AllRoutes