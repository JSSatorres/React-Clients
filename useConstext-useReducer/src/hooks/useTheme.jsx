import { useContext } from "react";
import themeContext from "../contextReducer/Theme-Context/themeContext";

function useTheme (){
    return useContext(themeContext) 
}

export default useTheme