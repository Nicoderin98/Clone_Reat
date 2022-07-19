import React from 'react'
import { Avatar } from '@mui/material'
function Navbar() {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid shadow-sm">
        <a className="navbar-brand" href="#">
        <img src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"variant="square" width="40" height="40" />
        </a>


        <b className="navbar-brand mb-0 h1 ">React Native</b>
        <Avatar src="https://avatars.githubusercontent.com/u/96485980?v=4" width="40" height="40" />
      </div>
    </nav>
  )
}

export default Navbar
