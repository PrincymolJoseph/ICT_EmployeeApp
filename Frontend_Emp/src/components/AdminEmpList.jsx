import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { Link } from 'react-router-dom'
import { axiosInstanceAdmin } from '../axiosInterceptor'

const AdminEmpList = () => {
  
  const [data,setData] = useState([])
  useEffect(()=>{
    axiosInstanceAdmin.get('/login/adminEmployees')
    .then((res)=>{
      console.log(`axiosInstanceAdmin res.data is - `)
      console.log(res.data)
      setData(...data,res.data)
    })
  },[])

  return (
    <div>
      <AdminNavbar/>
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
      <Link to='/'><button type="button" class="btn btn-primary d-grid col-6 mx-auto" 
      onClick={()=>{
        localStorage.removeItem('adminToken')
        }}>Logout</button></Link>
    </div>
  )
}

export default AdminEmpList