import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";


const click=()=>{
    console.log("clicked")
}
 

function Navbar() {
  return (
    <nav>
        <Link to={"/"}>
            Home
        </Link>
        
        <FaCartShopping onClick={click} />
        <FaRegUserCircle />
    </nav>
  )
}

export default Navbar
