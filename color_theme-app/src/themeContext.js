import React,{useState} from "react"
const ThemeContext=React.createContext()

function ThemeContextProvider(props){
    //set state
    const [theme, setTheme]=useState("dark")

    //changes theme color when function 
    function toggleTheme(){
        setTheme(prevTheme=> prevTheme==="light" ? "dark" : "light")



    }

    //we are going to PROVIDE the theme and toggle theme to our components
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    

 )
    }


 export {ThemeContextProvider,ThemeContext}
//export our provider and our content (object)












