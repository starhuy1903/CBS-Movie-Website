import styled from "styled-components";
import {bigMobile, tablet} from "../../responsive";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: darkgrey;
  opacity: 0.5;
  z-index: 20;
`

export const ModalWrapper = styled.div`
  position: fixed;
  outline: 0;
  top: 10vh;
  bottom: 10vh;
  left: 10vh;
  right: 10vh;
  display: flex;
  z-index: 20;
  ${tablet({
    left: '5vh',
    right: '5vh',
    top: '20vh',
    bottom: '20vh'
  })}
  ${bigMobile({
    left: 0,
    right: 0,
    top: '30vh',
    bottom: '30vh'
  })}
  
`

export const ModalHeader = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1.5rem;
  z-index: 1;

  .closeIcon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 2rem -1rem -1rem auto;
    cursor: pointer;
    color: white;

    ${tablet({
      margin: '4rem -1rem -1rem auto'
    })}
    ${bigMobile({
      margin: '10rem -1rem -1rem auto'
    })}
  }
`

export const Modal = styled.div`
  background: ${({theme}) => theme.primary};
  position: relative;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const PlayerWrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 50px 0;
`

export const PlayerSizer = styled.div`
  width: auto;
  height: 100%;
  padding-right: 82%;
  margin: 0 auto;
`
