import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  transition: all .3s;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }

  img {
    width: 100%;
    max-width: 720px;
    border-radius: 20px;
    object-fit: cover;
    transition: all .2s;
    height: 100%;

    @media screen and (max-width: 576px) {

    }
  }

  &:hover {
    transform: scale(0.96);
  }
`