import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { axiosInstanceAdmin } from '../axiosInterceptor'

const Employee = () => {
    const [e_id,set_e_id] = useState('')
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
        axiosInstanceAdmin.get(`/emp/employee/${e_id}`)
        .then((res)=>{
            if(res.data.message == 'Employee Not Present.'){
                alert('Employee Not Present.')
            }else{
                console.log(`res.data from axios is - `)
                console.log(res.data)
                setEmployee(res.data)
            }
            // setTimeout(() => console.log('Waiting...'), 1000); // Keeps the logs visible
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function updateEmployee(){
        console.log('Now employee is - ')
        console.log(employee)
        axiosInstanceAdmin.patch(`/emp/employee/${e_id}`,employee)
        .then((res)=>{
            console.log(`res.data.message from axios is - `)
            console.log(res.data.message)
            alert(res.data.message)
            // setTimeout(() => console.log('Waiting...'), 1000); // Keeps the logs visible
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function deleteEmployee(){
        console.log('Now employee is - ')
        console.log(employee)
        axiosInstanceAdmin.delete(`/emp/employee/${e_id}`)
        .then((res)=>{
            console.log(`res.data.message from axios is - `)
            console.log(res.data.message)
            alert(res.data.message)
            // setTimeout(() => console.log('Waiting...'), 1000); // Keeps the logs visible
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <AdminNavbar/>
        <form class="formStyle" >
            <h2 class="text-primary py-2 text-center"><u>Employee</u></h2>
            <br/>
            <div class="row mb-3">
            <label class="col-sm-2 col-form-label" ><b>Enter Employee id:</b></label>
            <div class="col-sm-8">
                <input type="text" class="form-control" 
                onChange={(e)=>{
                    const eValue = e.target.value;
                    set_e_id(eValue)
                    // setEmployee({...employee,id:e.target.value})
                }}/>
            </div>
            <div class="col-sm-2"><button type="button" class="btn btn-primary" onClick={captureEmployee}>Get Details</button></div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Employee Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.name}
                onChange={(e)=>{
                    setEmployee({...employee,name:e.target.value})
                    // console.log('Now employee is - ')
                    // console.log(employee)
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email id</label>
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
            <label class="col-sm-2 col-form-label">Phone Number</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.phone}
                onChange={(e)=>{
                    setEmployee({...employee,phone:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Designation</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.designation}
                onChange={(e)=>{
                    setEmployee({...employee,designation:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Location</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" value={employee.location}
                onChange={(e)=>{
                    setEmployee({...employee,location:e.target.value})
                }}/>
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Salary</label>
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
                        <div class="col"><button type="button" class="btn btn-primary" onClick={deleteEmployee}>Delete the Employee</button></div>
                        <div class="col"><button type="button" class="btn btn-primary" onClick={updateEmployee}>Update the Employee</button></div>
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

export default Employee