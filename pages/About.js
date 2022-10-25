import { Link,useNavigate } from "react-router-dom";
import React from "react";
import '../styles/Home.css';
import home from '../assets/home.svg'
import menu from '../assets/menu.svg'
import w1 from '../assets/working1.png'
import w2 from '../assets/working2.png'

const About = () =>{

    return(
        <div>
            <header className="sm: p-4 btn bg-gray-100 md:flex justify-between">
                <div>
                    <Link to= '/'><div className="hidden font-light text-xs text-pink-300 md:flex">Home / </div></Link>
                    <div className="text-2xl text-white ">About</div>
                </div>
                <img className="flex absolute top-6 right-8 md:hidden" src={menu}></img>
                <Link to="/"><button className="hidden inline-flex items-center p-4 rounded border-solid border-3 border-white py-2.5 p-3 text-sm text-white md:px-5 text-xs md:flex lg:flex"><img className="pr-2 pt-0.5" src={home}></img> Go Home </button></Link>
            </header>   
            <a className="flex-row" href="https://github.com/hariprasd/spot">
                <p className="underline font-normal pt-6 px-9 text-xs text-center text-gray-500 md:text-right">Github Link ↗︎</p>
            </a>
            <p className="m-6 px-3 text-sm text-center">
            <spl className="text-pink-600 text-sm">Spot</spl> is a Web based offline chat platform, connected by wifi & hotspot to share only the text & generic data (offline & browser based) - for quick polls, fun chat etc..
            </p>
            <img className="mx-auto w-9/12 px-10 lg:w-2/4" src={w1} alt="Working1"></img>
            <p className="m-6 px-3 text-sm">
            This idea originated when we went to several meetings & local meetups. Then seeing people facing issues in joining a group chat because, Every Chat Application like Whatsapp, Signal, Telegram needs either Mobile Number/ Username etc.. to initiate a group or a private chat. Here We are trying to solve this problem, which has already been solved by Mobile Applications. But none of them will be interested in downloading a new app at that time.
            Here We are trying to figure out How <spl className="text-pink-600 text-sm">P2P connections</spl> can be established using JavaScript in a Browser, So that people just need to open the Website & Connect wifi with a chosen host's personal hotspot / Organisation's Broadband. So that everyone in that network can access the chat environment. There they can <spl className="text-pink-600 text-sm">conduct polls, Gather opinions, Fun Chat etc... <br></br></spl>
            There are issues like Maximum Connections per device,Public Wifi issues and more, But we are trying to build a proper solution for these problems.
            </p>
            <img className="mx-auto w-fit lg:w-6/12 " src={w2} alt="Working2"></img>

        </div>
    )

}
export default About;