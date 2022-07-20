import React from 'react'
import { Avatar } from '@mui/material'
import Logo from "./logo.svg"
function Navbar() {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid shadow-sm">
        <div className="navbar-brand logo" >
        <img src={Logo}variant="square"alt='logo react' width="40" height="40" />
        </div>


        <b className="navbar-brand mb-0 h1 ">React Native</b>
        <Avatar src="https://avatars.githubusercontent.com/u/96485980?v=4" width="40" height="40" />
      </div>
    </nav>
  )
}

export default Navbar
