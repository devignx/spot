import React from "react";
import logo from '../assets/logo.svg';
import { Link,useNavigate } from "react-router-dom";
import About from "../pages/About";

const Nav = () => {
    return(
        <div>
            <div className="sm:justify-center w-full h-1/6 flex items-center p-6 md:justify-between">
                <img src={logo} className="w-20 md:w-16 " alt="Spot-logo"/>
                <div className="w-2/6 flex items-center justify-evenly gap-x-4 hidden lg:flex md:flex">
                <Link to='/About'> <p className="text-sm hover:text-pink-600">About</p></Link>
                    <a href="/" ><p className="text-sm hover:text-pink-600">How to?</p></a>
                    <a href="/" ><p className="text-sm hover:text-pink-600">Docs</p></a>
                </div>
            </div>
        </div>
    )
}

export default Nav;