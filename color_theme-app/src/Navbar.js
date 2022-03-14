import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

export default function Navbar(){

    //state
    //object
    const{theme}=useContext(ThemeContext)

    return(
        <nav className={`${theme}-nav`}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
         
        </ul>
        </nav>


    )















}