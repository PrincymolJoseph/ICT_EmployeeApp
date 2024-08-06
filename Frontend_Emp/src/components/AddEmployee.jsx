import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { axiosInstanceAdmin } from '../axiosInterceptor'

const AddEmployee = () => {
    const [employee,setEmployee] = useState({
        id:'',
        name:'',
        email:'',
        address:{
            street:'',
            city:'',
            zipcode:'',
        },
        phone:'',
        designation:'',
        location:'',
        salary:'',
    })

    function captureEmployee(){
        axiosInstanceAdmin.get(`https://ict-employee-app-server.vercel.app/emp/employee/${employee.id}`)
        .then((res)=>{
            if(res.data.message == 'Employee Not Present.'){
                addEmployee()
            }else{
                alert('Employee id already Present. Use a different id.')
            }
            // setTimeout(() => console.log('Waiting...'), 1000); // Keeps the logs visible
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function addEmployee(){
        console.log(`Inside captureEmployee`)
        axiosInstanceAdmin.post('https://ict-employee-app-server.vercel.app/emp/addEmployee',employee)
        .then((res)=>{
            console.log(`res.data.message from axios is - ${res.data.message}`)
            alert('Employee Added!!!')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // const captureEmployee = (event) => {
    //     const stateId = parseInt(event.target.value);
    //     setCities(cityData[stateId] || []);
    //   };

  return (
    <div>
        <AdminNavbar/>
        <form class="formStyle" >
            <h2 class="text-primary py-2 text-center"><u>Employee</u></h2>
            <br/>
            <div class="row mb-3">
            <label class="col-sm-2 col-form-label" ><b>Enter Employee id :</b></label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.id}
                onChange={(e)=>{
                    setEmployee({...employee,id:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Employee Name :</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.name}
                onChange={(e)=>{
                    setEmployee({...employee,name:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email id :</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.email}
                onChange={(e)=>{
                    setEmployee({...employee,email:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Address :</label>
                <div class="col-sm-10">
                    <div class="row">
                        <label class="col-sm-2 col-form-label">Street:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value={employee.address.street}
                            onChange={(e)=>{
                                setEmployee({...employee,
                                    address:{...employee.address,street:e.target.value,},})
                            }}/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    <div class="row">
                        <label class="col-sm-2 col-form-label">City:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value={employee.address.city}
                            onChange={(e)=>{
                                setEmployee({...employee,
                                    address:{...employee.address,city:e.target.value,},})
                            }}/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    <div class="row">
                        <label class="col-sm-2 col-form-label">ZipCode:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value={employee.address.zipcode}
                            onChange={(e)=>{
                                setEmployee({...employee,
                                    address:{...employee.address,zipcode:e.target.value,},})
                            }}/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Phone Number :</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.phone}
                onChange={(e)=>{
                    setEmployee({...employee,phone:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Designation :</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.designation}
                onChange={(e)=>{
                    setEmployee({...employee,designation:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Location :</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.location}
                onChange={(e)=>{
                    setEmployee({...employee,location:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Salary :</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.salary}
                onChange={(e)=>{
                    setEmployee({...employee,salary:e.target.value})
                }}/>
            </div>
            </div>
            <br/>
            <div class="d-grid col-4 mx-auto">
                <div class="container text-center">
                    <div class="row">
                        <div class="col"><button type="button" class="btn btn-primary " onClick={captureEmployee}>Add the Employee</button></div>
                    </div>
                    <br/>
                    <div class="row">
                        <Link to='/'><button type="button" class="btn btn-primary d-grid col-6 mx-auto" 
                        onClick={()=>{
                            localStorage.removeItem('adminToken')
                        }}>Logout</button></Link>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddEmployee