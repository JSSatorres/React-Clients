import { useContext } from "react";
import themeContext from "../context/Theme-Context/themeContext";

function useTheme (){
    return useContext(themeContext) 
}

export default useTheme