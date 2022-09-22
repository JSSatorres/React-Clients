import { useState,  } from "react"
import { ThemeProvider } from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from "../../componentsStyled/themes"
import themeContext from "./themeContext"

export function ThemeProviderContextAndStyleComponents ({children}){

    const [currentTheme, setCurrentTheme] = useState("light")


    const toggleTheme = ()=> {
        currentTheme === "light" ? setCurrentTheme("dark"):setCurrentTheme("light")
    }  
     
    
    const value= {
        toggleTheme,
        currentTheme
    }
    
    return(
        <themeContext.Provider value={value}>
            <ThemeProvider theme={ currentTheme=== "light" ? lightTheme : darkTheme}>
                <GlobalStyles/>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    )
}