import {createGlobalStyle} from "styled-components"
 
export const  lightTheme= {
  background: "#f05053", 
  background2: "#e1eec3",
  border: "#834e4f",
  backgroundWraper:"#f0efdf", 
  backgroundForm:"#f5f5f0", 
  surface: "#ffffff", 
  text: "#0c0c0c", 
  text2: "#ffffff",
  colorBoton:"#eee34d",
}

export const darkTheme={
  background: "#292828",
  background2: "#5a5555", 
  border: "#2f7bc2", 
  backgroundWraper:"#b8b8b8",
  backgroundForm:"#444444",
  surface: "#1e1e1f",
  text: "#FFF",
  text2: "#000000",
  colorBoton:"#2449af",
}

export const GlobalStyles = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-content: center; 
    height: 100vh;
    background:  linear-gradient(to bottom, ${({ theme }) => theme.background },${({ theme }) => theme.background2 });
    margin: 0;
    font-family: "Roboto";
    font-weight: 300;
    padding: 15px;
    color:${({ theme }) => theme.text };
    transition: all 0.4s linear;
  }
`

