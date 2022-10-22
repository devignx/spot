import { Link,useNavigate } from "react-router-dom";
import React from "react";
import '../styles/Home.css';
import Nav from "../components/Nav";
import error from '../assets/404.svg'
import home from '../assets/home.svg'

export default function NotFound() {

    const navigate = useNavigate(); 

    return (
        <div>
            <Nav/>
            <div className="flex items-center flex-col gap-y-4"> 
                <img className="w-1/4" src={error}></img>
                <p className="text-pink-600 text-center ">OOPS! The page you requested was not found<br></br> <b className="text-slate-700">"Kadal laye Illayaam!"</b></p>
                <div className="flex items-center justify-center  flex-col md:flex-row">
                    <Link to="/"><button className="inline-flex items-center p-4 rounded btn py-2.5 p-3 text-sm text-white md:px-5 text-xs"><img className="pr-2 pt-0.5" src={home}></img> Go Home </button></Link>
                    <p className="p-4 text-xs">or</p>
                    <button onClick={() => navigate(-1)} className="p-4 rounded px-5 text-xs md: border-solid border-2 border-slate-300 py-2.5 text-sm text-gray-700">Back</button>
                </div>
            </div>
            
        </div>
    )
}