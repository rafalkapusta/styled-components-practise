import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100vw;
}

*, *::after, *::before {
box-sizing: inherit;
}

body {
margin: 0;
padding: 0;
}
  
.card-enter {
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
}

.card-enter.card-enter-active {
  transform: rotateY(0deg);
  transition: transform 500ms ease-in;
}

.card-exit {
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
}

.card-exit.card-exit-active {
  transform: rotateY(0deg);
  transition: transform 500ms ease-in;
}
`;
