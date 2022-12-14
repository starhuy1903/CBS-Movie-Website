import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #212121;
  }

  :root {
    --maxWidth: 1280px;
    --white: #eee;
    --lightGrey: #666;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --fontSuperSmall: 0.8rem;

    //  booking seat color
    --selectedColor: #FFB300;
    --soldColor: #508cb3;
    --availableColor: #d2d2d2;
    --vipSeatColor: #cb1c1c;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white)
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: var(--white);
  }

  ul {
    list-style: none;
  }
`
