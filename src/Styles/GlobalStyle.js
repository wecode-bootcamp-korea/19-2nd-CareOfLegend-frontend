import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

* {
  box-sizing: border-box;
}

#root {
  font-family: "Questrial", sans-serif;
}

input {
  border: none;
  outline: none;
}

button {
  outline: none;
}

a {
  color: rgb(0,0,0);
  text-decoration: none;
}

`;

export default GlobalStyle;
