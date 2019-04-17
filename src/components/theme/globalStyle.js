import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`

export default GlobalStyle
