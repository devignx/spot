import React from "react";
import logo from '../assets/logo.svg';
import { Link,useNavigate } from "react-router-dom";

const Nav = () => {
    return(
        <div>
            <div className="sm:justify-center w-full h-1/6 flex items-center p-6 md:justify-between">
                <Link to ='/'><img src={logo} className="w-20 md:w-16 " alt="Spot-logo"/></Link>
                <div className="w-2/6 flex items-center justify-evenly gap-x-4 hidden lg:flex md:flex">
                <Link to='/About'> <p className="text-sm hover:text-pink-600">About</p></Link>
                <Link to ='/'><p className="text-sm hover:text-pink-600">How to?</p></Link>
                <Link to ='/'><p className="text-sm hover:text-pink-600">Docs</p></Link>
                
            <a href='upi://pay?pa=harimohan0502@okaxis&pn=Hari%20Prasad%20Designer&aid=uGICAgIDLmKjyIA'>Hiasddc</a>
                </div>
            </div>
        </div>
    )
}

export default Nav;
