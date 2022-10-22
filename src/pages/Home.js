import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Enter from "../components/Enter";
import '../styles/Home.css';
import { motion } from "framer-motion";
import axios from "axios";
import connect from "../assets/connect.png"
import { Link,useNavigate } from "react-router-dom";

const Home = () => {

    const [enter, setEnter] = useState(false);
    const [ip, setIp] = useState()

    const variants = {
        visible: {
            y: 0,
            transition: { duration: 0.01 }
        },
        hidden: {
            y: '100%',
        }
    }

    const handleEnter = () => {
        setEnter(!enter)
    }

    useEffect(()=> {
        axios.get('https://api.ipify.org/?format=json')
        .then(response => {
            axios.post('http://localhost:5000/', {params: {ip: response.data}})
            .then(response => {
                console.log(response.data)
            })
        .   catch(()=> console.log("error while sending data into the server"))

        })
        .catch(()=>console.log("error getting public ip address"))
    }, [])



    return(
        <div className="h-screen overflow-y-hidden">
            <Nav/>
            <div className="w-full  h-3/5 flex items-center justify-center flex-col gap-y-2">
                <Enter autoFocus handleEnter = {handleEnter}/>
                <p id="enterroom" className="hidden md:inline text-xs text-gray-400">or Press Enter ↵ for Chat</p>
                <p id="enterroom" className="inline text-xs text-gray-400 md:hidden">Click to Chat</p> 
            </div>
            <div className="w-full h-1/5 flex items-center flex-col gap-y-2 bg-pink-100 justify-center md: h-1/5">
                <p className="text-sm text-rose-500 font-semibold">NOTE</p>
                <p className="text-xs font-thin">
                    • Ask for Wifi Password from the organisation you are at :)<br></br>
                    • Connect all devices in the same wifi<br></br>
                    • Chat rooms are unmoderated, So behave responsively
                </p>
            </div>
            {
                enter && (
                    <motion.div
                         variants={variants}
                         initial="hidden"
                         animate="visible"
                         className="absolute z-10 top-1/4 w-full h-3/4 bg-gray-900 flex items-center flex-col">
                         <img className="w-20 -translate-y-10"  src={connect}></img>    
                            <div className="w-full h-4/5 flex items-center flex-col gap-y-5 md: gap-y-10 lg: gap-y-10">
                            <div className="text-center font-thin flex-col gap-y-0.5">
                                <p className="text-xs text-gray-500">Before entering</p>
                                <p className="text-base text-gray-50">Give yourself a cool Username</p>
                            </div>
                            <form className="w-9/12 flex items-center justify-evenly flex-col gap-y-4 md:w-1/4">
                                    <input autoFocus autoComplete="name" className="rounded border-0 outline-0 py-4 px-3 text-sm w-full md:py-1.5 text-xs" type="text-xs" placeholder="John Doe"/>
                                    <button type="submit"onSubmit={()=> handleEnter() } className="rounded btn py-4 bg-white text-sm text-white border-0 outline-0 w-full md:py-2 text-xs">ENTER</button>
                            </form>
                            <p className="cursor-pointer font-thin text-gray-300 text-xs underline" onClick={()=> handleEnter()}>Go back</p>
                        </div>
                    </motion.div>
                )
            }
        </div>
    )
}

export default Home;