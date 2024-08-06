import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-primary ">
        <div class="container-fluid">
            <Link to={'/AddEmployee'}><a class="nav-link navLink text-white" href='/AddEmployee' ><u>Add Employee</u></a></Link>
            <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                <h1 class="text-white">  The Employee App  </h1>
            </div>
            <Link to={'/Employee'}><a class="nav-link navLink text-white"  href='/Employee'><u>View/Edit Employee</u></a></Link>
        </div>
      </nav>
    </div>
  )
}

export default AdminNavbar