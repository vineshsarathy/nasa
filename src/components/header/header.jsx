import React from 'react'
import logo from '../../assets/logo.svg'
import './header.css'

export default function HeaderComponent() {
  return (
    <div className='headerContainer'>
        <div className="logoContainer">
            <img src={logo} alt="" />
            <h3 className='devName'>Vinesh Parthasarathy</h3>
        </div>
        <h2 className='head-name'>Astronomy Picture <br/>
        of the Day</h2>

    </div>
  )
}
