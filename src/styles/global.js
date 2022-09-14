import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    display: grid;
    place-items: center;
    height: 100vh;
  }

  #themeChange {
    position: relative;
    z-index: 2;
    width: fit-content;
    margin: 0 auto;

    div {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
    }
  }
`