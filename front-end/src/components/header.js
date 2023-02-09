import React, { useContext} from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import logo from "../components/image/team.svg"
import '../css/header.css'
// import { ColorModeContext } from '../provider/theme';

export const Header = () => {
    // const { darkmode, setDarkmode } = useContext(ColorModeContext)
    return (
        <div>
            <div className='header row'>
                <img style={{ marginLeft: "150px", marginRight: "600px" }} src={logo}></img>
                <div className='header-end'>
                    {/* <div className='Toggle'>
                        <label class="switch">
                            <input type="checkbox" onChange={() => setDarkmode(!darkmode)} />
                            <span class="slider round"></span>
                        </label></div> */}
                    <Link className='headertexts' to={'/Home'}>Home</Link>
                    <Link className='headertexts' to={'/blog'}>Blog</Link>
                    <button className='headertexts'>Contact</button>
                    <button className='headertexts'>Log In</button>
                    <button className='getacc'>Get Access</button>
                </div>
            </div>
            <Outlet />
        </div>

    )
}