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
  text-decoration:none;
  color: rgba(0,0,0,1);
}

`;

export default GlobalStyle;
