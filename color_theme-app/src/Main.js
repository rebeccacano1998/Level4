import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

export default function Main(props){

    //state and our function 
    const {theme,toggleTheme}=useContext(ThemeContext)// our object

    return(
        //will allow a change of state when button is clicked
        <div className="main_body">
                    <div className={`${theme}-theme`} >
                  
                                                {/*light or dark*/}
                            <h1 className="main">Click the button to toggle the {`${theme}-theme`} </h1>
  

                             <button
                             onClick={toggleTheme}
                            className={`${theme}-theme`}>
                
                            Click me
                 
                             </button>



                 </div>
        </div>
        
        
        
 )}