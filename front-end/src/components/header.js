import React, { useContext} from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import logo from "../components/image/team.svg"
import '../css/header.css'

export const Header = () => {
    return (
        <div className='headers'>
        <h1 className='team pointer'>team</h1>
        <div className='list'>
          <Link to={"/Home"} style={{ fontSize: "18px" }} className='pointer'>Home</Link>
          <Link to={"/blog"} style={{ fontSize: "18px" }} className='pointer'>Blog</Link>
          <Link to={"/"} style={{ fontSize: "18px" }} className='pointer'>Contact</Link>
          <Link to={"/"} style={{ fontSize: "18px" }} className='pointer'>Log in</Link>
          <div className='getAccess pointer'>
            Get Access
          </div>
        </div>
      </div>

    )
}