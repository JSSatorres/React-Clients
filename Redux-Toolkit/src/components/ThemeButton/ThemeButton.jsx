import React from "react";
import useTheme  from "../../hooks/useTheme"; 
import "./themeButton.css"
/* import ThemeContext from "../context/ThemeContext"; */
/* import themes from "../../componentsStyled/themes"; */


const ThemeButton = () => {

  const {currentTheme, toggleTheme}= useTheme() 
  
  return (
    <label className="switchBtn">
        <input onClick={()=> toggleTheme()} type="checkbox"/>
        <div className="slide">{currentTheme}</div> 
    </label>
  ) 
 
};
export default ThemeButton