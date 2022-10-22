import React from "react";
import logo from '../assets/logo.png';

const Nav = () => {
    return(
        <div className="w-full h-1/6 flex items-center justify-between p-6">
            <a href="" ><img src={logo} className="w-16" alt="Spot-logo"/></a>
            <div className="w-2/6 flex items-center justify-evenly gap-x-4 ">
                <a href="#" ><p className="text-xs hover:text-pink-600">About</p></a>
                <a href="#" ><p className="text-xs hover:text-pink-600">How to?</p></a>
                <a href="#" ><p className="text-xs hover:text-pink-600">Docs</p></a>
            </div>
        </div>
    )
}

export default Nav;