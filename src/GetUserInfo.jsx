import React, { useEffect, useState } from 'react'
import "./GetUserInfo.css";
const GetUserInfo = () => {
    const [user, setUser] = useState([]);

    const getData = async () => {
        try {
            const url = "https://sweede.app/DeliveryBoy/Get-Employee/"
            const res = await fetch(url);
            const data = await res.json();
            setUser(data)
        } catch (error) {
            console.log(error);
      }
        
    }
    useEffect(()=>{
        getData();  
    },[user])
  return (
      <div><h2>Employee List</h2>
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>DOB</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Current Salary</th>
                      <th>Description</th>
                      {/* Add more columns as needed */}
                  </tr>
              </thead>
              <tbody>
                  {user.map((user) => (
                      <tr key={user.id}>
                          <td>{user.FirstName}</td>
                          <td>{user.DOB}</td>
                          <td>{user.StartDate}</td>
                          <td>{user.EndDate}</td>
                          <td>{user.CurrentSalary}</td>
                          <td>{user.Description}</td>
                          {/* Add more columns as needed */}
                      </tr>
                  ))}
              </tbody>
          </table></div>
  )
}

export default GetUserInfo