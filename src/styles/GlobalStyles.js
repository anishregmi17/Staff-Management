import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  p {
    font-size: 1rem;
    color: #666;
  }
`;

export default GlobalStyles;
