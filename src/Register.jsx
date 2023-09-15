import React, { useEffect, useState } from 'react'
import "./Register.css"
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const formData = {
        FirstName: "",
        LastName: "",
        DOB: "",
        Study: "",
        StartDate: "",
        EndDate: "",
        CurrentSalary: "",
        Description: "",
    }

    const navigate = useNavigate();


    const [getinput, Setinput] = useState(formData);
    const [option, setOption] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        Setinput({ ...getinput, [name]: value })
    };

    const UserDetails = async () => {
        if (!getinput?.FirstName) {
            toast.error("Please Enter fistName")
        }
        else if (!getinput?.LastName) {
            toast.error("Please Enter lastName")
        }
        else if (!getinput?.DOB) {
            toast.error("Please Enter DOB")
        }
        else if (!getinput?.Study) {
            toast.error("Please Enter study")
        }
        else if (!getinput?.StartDate) {
            toast.error("Please Enter start date")
        }
        else if (!getinput?.EndDate) {
            toast.error("Please Enter end date")
        }
        else if (!getinput?.CurrentSalary) {
            toast.error("Please Enter end current salary")
        }
        else if (!getinput?.Description) {
            toast.error("Please Enter end descriptons")
        }
        else {
            try {
                let url = "https://sweede.app/DeliveryBoy/Add-Employee/"
                const config = {
                    'Content-Type': 'application/json',
                }

                axios.post(url, getinput, { headers: config }).then((res) => {
                    if (res) {
                        toast.success("User Register Successfully")
                        navigate("/getuserinfo")
                    }
                    console.log(res)
                }).catch((err) => {
                    console.log(err, "err")
                })
            }
            catch (err) {
                console.log(err, "err-cath")
            }
        }
    }
    console.log(getinput, "ssssss");

    console.log(getinput, "form")
    
    useEffect(() => {
        
    })

  return (
      <div className="main_div_main">
          <h1>Employee Registration Form</h1>
          <div className='main_div'>
              <div className='first_div'>
                  <label>FirstName</label>
                  <input type="text"
                  placeholder="Enter your name"
                      name="FirstName"
                      onChange={handleSubmit}
                      value={getinput?.FirstName}/>
                  <label>Last Name</label>
                  <input type="text"
                   placeholder="Enter your name"
                      name="LastName"
                      onChange={handleSubmit}
                      value={getinput?.LastName}/>
              </div>
              <div className='second_div'>
                  <label>DOB</label>
                  <input type="date"
                   placeholder="date"
                      name="DOB"
                      onChange={handleSubmit}
                      value={getinput?.DOB}
                  />
              </div>

              <div className='third_div'>
                  <label>Study</label>
                  <select name="Study"
                      onChange={handleSubmit}
                      value={getinput?.Study} >
                      <option value="Study" disabled>
                          Select an option
                      </option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="B.Tech">B.Tech</option>
                 </select>
              </div>

              <div className='fourth_div'>
                  <label>Start Date</label>
                  <input type="date"
                      name="StartDate"
                      onChange={handleSubmit}
                      value={getinput?.StartDate}/>
                  <br />
                  <label>End Date</label>
                  <input type="date"
                      name="EndDate"
                      onChange={handleSubmit}
                      value={getinput?.EndDate}
                  />
              </div>

              <div className='fifth_div'>
                  <label>Current Salary</label>
                  <input type="number"
                      name="CurrentSalary"
                      onChange={handleSubmit}
                      value={getinput?.CurrentSalary}/>
              </div>

              <div className='fifth_div'>
                  <label>Descripttion</label>
                  <textarea
                      name="Description"
                      onChange={handleSubmit}
                      value={getinput?.Description}
                  ></textarea>
              </div>

              <button className="btn1">Save</button>
              <button className="btn2" onClick={UserDetails}>Cancel</button>
              <ToastContainer />
              
          </div>
    </div>
  )
}

export default Register