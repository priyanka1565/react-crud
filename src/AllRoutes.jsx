import React from 'react';
import { Routes, Route } from "react-router-dom";
import Register from './Register';
import EmployeeList from './EmployeeList';

const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Register/> }></Route>
          <Route path='/getuserinfo' element={<EmployeeList  />} />
          
      </Routes>
    </div>
  )
}

export default AllRoutes