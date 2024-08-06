import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import UserEmpList from './components/UserEmpList'
import AdminEmpList from './components/AdminEmpList'
import Employee from './components/Employee'
import AddEmployee from './components/AddEmployee'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/UserEmpList' element={<UserEmpList/>}></Route>
        <Route element={<PrivateRoutes/>}>
          <Route path='/AdminEmpList' element={<AdminEmpList/>}></Route>
          <Route path='/Employee' element={<Employee/>}></Route>
          <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
