import styled from "styled-components";
import {devices} from "../../GlobalStyle";

export const Container = styled.div`
  padding: 40px 20px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 29%, rgba(108, 112, 116, 1) 75%, rgba(29, 25, 25, 1) 100%);`

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  border-radius: 20px;

@media${devices.mobile} {
  flex-direction: column;
}
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 1rem;
  flex: 1;

  .playIcon {
    position: absolute;
    left: 0;
    right: 0;
    height: 50px;
    width: 50px;
    display: none;
    color: white;
    margin: 0 auto;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover .playIcon {
    display: block;
  }

@media${devices.mobile} {
  margin-bottom: 1rem;
}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 5px 5px 14px 5px rgba(0, 0, 0, 0.72);
  max-height: 350px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }


@media${devices.landscapeMobile} {
  max-height: 300px;
} @media${devices.mobile} {
  max-height: 250px;
  width: auto;
}
`

export const Description = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  position: relative;
  flex: 2;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: lightgray;
    font-weight: 400;
  }

  .sticker {
    position: absolute;
    color: red;
    font-weight: bold;
    top: 4px;
    right: 2px;
    padding: 2px 4px;
    border: 1px solid red;
    border-radius: 5px;
    transform: rotate(20deg);
  }

@media${devices.mobile} {
  h3 {
    font-size: 0.8rem;
  }

  p {
    font-size: 0.7rem;
  }
} @media${devices.landscapeMobile} {
  h3 {
    font-size: 0.85rem;
  }

  p {
    font-size: 0.75rem;
  }
}
`

export const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 20px;

@media${devices.mobile} {
  font-size: 1rem;
} @media${devices.landscapeMobile} {
  font-size: 1.1rem;
}
`