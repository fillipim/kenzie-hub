import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
}
button{
  cursor: pointer;
}
  &:root{
    --primal-color: #FF577F;
    --primal-color-focus: #FF427F;

    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;

    --error: #E83F5B;
    --sucess: #3FE864;

  }
  body{
    background-color: #000000;
  }
`