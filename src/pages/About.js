import { Link,useNavigate } from "react-router-dom";
import React from "react";
import '../styles/Home.css';
import Nav from "../components/Nav";

const About = () =>{

    return(
        <div>
            <Nav/>
            <div className="text-center text-pink-600">About</div>

        </div>
    )

}
export default About;