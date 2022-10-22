import React from "react";
import '../styles/Enter.css';
import { motion } from "framer-motion";

const Enter = ({ handleEnter }) => {
    return(
        <motion.div
            onClick={()=> handleEnter()}
            whileHover={{
                scale:1.04,
                cursor: 'pointer'
            }}
            className="enter w-20 h-20 rounded-full border-black p-8 flex items-center justify-center">
            <p className="text-xs text-white">ENTER</p>
        </motion.div>
    )
}

export default Enter;