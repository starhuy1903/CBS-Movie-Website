import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 90vh;
`

export const LoaderWrapper = styled.div`
  width: 80px;
  height: 80px;
`

export const Loader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 10px solid #162534;
  border-top-color: #4bc8eb;
  border-bottom-color: #f13a8f;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
  
  &.loader-inner {
    border-top-color: #36f372;
    border-bottom-color: #FF3D00;
    animation-duration: 2.5s;
  }
  
  @keyframes rotate {
    0% {
      transform: scale(1) rotate(360deg);
    }
    50% {
      transform: scale(.8) rotate(-360deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
 `