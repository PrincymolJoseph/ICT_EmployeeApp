import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { axiosInstanceUser } from '../axiosInterceptor'

const UserEmpList = () => {

  const [data,setData] = useState([])
  useEffect(()=>{
    axiosInstanceUser.get('/login/userEmployees')
    .then((res)=>{
      console.log(`res is - `)
      console.log(res)
      setData(...data,res.data)
    })
  },[])

  return (
    <div>
      <Navbar/>
      <br></br>
      <h2 class="text-primary py-2 text-center"><u>The List of Employees</u></h2>
      <table class="table table-hover mx-5" style={{width:'90%'}}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each)=>(
            <tr>
              <th scope="row">{each.id}</th>
              <td>{each.name}</td>
              <td>{each.email}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <Link to={'/'}><button type="button" class="btn btn-primary d-grid col-6 mx-auto" 
      onClick={()=>{
        localStorage.removeItem('userToken')
        }}>Logout</button></Link>
    </div>
  )
}

export default UserEmpList