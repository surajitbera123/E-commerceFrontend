import React from 'react'
import "../index.css"
import profile from "../datas/headericons/profile.svg"
import cart from "../datas/headericons/cart.svg"
import MainNav from "./MainNav"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>
    <div className='header'>
            <span className='headroute'>
                <img className='imgicon' src={profile} alt=" " />&nbsp;
                <span >My Profile</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/cart"><img className='imgicon' src={cart} alt=" " />&nbsp;</Link>
                <span >Cart</span>&nbsp;
            </span>
            <h2 className='text-center pt-3 fw-bold' style={{"color":"red"}}>ishop</h2>
            <MainNav/>
        </div>
        
    </div>
    </>
  )
}

export default Header
