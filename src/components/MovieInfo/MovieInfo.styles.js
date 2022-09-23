import styled from "styled-components";
import {bigMobile, mobile} from "../../responsive";

export const Container = styled.div`
  padding: 40px 20px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 29%, rgba(108, 112, 116, 1) 75%, rgba(29, 25, 25, 1) 100%);`

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  
  ${mobile({
    flexDirection: 'column'
  })}

`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 1rem;
  flex: 1;
  ${mobile({
    marginBottom: '1rem'
  })}
  
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
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 5px 5px 14px 5px rgba(0, 0, 0, 0.72);
  max-height: 350px;
  transition: all 0.3s ease;
  ${bigMobile({
    maxHeight: '300px'
  })}
  ${mobile({
    maxHeight: '250px',
    width: 'auto'
  })}

  &:hover {
    opacity: 0.8;
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
    ${bigMobile({
      fontSize: '0.85rem'
    })}
    ${mobile({
      fontSize: '0.8rem'
    })}
  }

  p {
    color: lightgray;
    font-weight: 400;
    ${bigMobile({
      fontSize: '0.75rem'
    })}
    ${mobile({
      fontSize: '0.7rem'
    })}
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
`

export const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 20px;
  ${bigMobile({
    fontSize: '1rem'
  })}
  ${mobile({
    fontSize: '1.1rem'
  })}
`