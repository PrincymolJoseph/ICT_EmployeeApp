import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmpList from './UserEmpList'
import axios from 'axios'
import Navbar from './Navbar'

const Login = () => {
  const navigate = useNavigate();
  const [user,setUser]= useState({
    email:'',
    password:'',
  })

  function captureValue(){
    console.log('Hi')
    axios.post('http://localhost:5000/user/login',user)
    .then((res)=>{
      if(res.data.message == 'User not found'){
        alert('User not found')
      }else{
        console.log('Login res.data.message is -')
        console.log(res.data.message)
        console.log('Login res.data.adminToken is -')
        console.log(res.data.adminToken)
        if(res.data.adminToken){
          localStorage.setItem('adminToken',res.data.adminToken)
          navigate('/AdminEmpList')
        }else if(res.data.userToken){
          localStorage.setItem('userToken',res.data.userToken)
          navigate('/UserEmpList')
        }
      }    
  })};
  
  return (
    <div>
        <Navbar/>
        <form class="formStyle" >
        <h2 class="text-primary py-2 text-center"><u>Login to your Account</u></h2>
        <br/>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label" >Username</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userName" 
            onChange={(e)=>{
              setUser({...user,email:e.target.value})
            }}/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="pwd"
            onChange={(e)=>{
              setUser({...user,password:e.target.value})
            }}/>
            <br/>
            <a href="">Forgot password?</a>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1"/>
              <label class="form-check-label" for="gridCheck1">
                Remember me on this device
              </label>
            </div>
          </div>
        </div>
        <div class="d-grid col-4 mx-auto">
          {/* <button type="submit" class="btn btn-primary" >Log in</button> */}
          <button type="button" class="btn btn-primary d-grid col-6 mx-auto" onClick={captureValue}>Log in</button>
          <a href="" style={{margin:'auto'}} >New users click here to sign up</a>
        </div>
      </form>
    </div>
  )
}

export default Login