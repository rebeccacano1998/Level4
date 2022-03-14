import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

export default function Footer(){

    //state
    //object
    const{theme}=useContext(ThemeContext)

    return(
     <footer className={`${theme}-theme`}>The amazing footer</footer>


    )
}