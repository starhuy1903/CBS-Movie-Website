import styled from "styled-components";
import {bigMobile, mobile, tablet} from "../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(78, 78, 78, 1) 29%, rgba(64, 71, 78, 1) 75%, rgba(29, 25, 25, 1) 100%);
  min-height: 90vh;
  ${tablet({
    flexDirection: 'column'
  })}
`

export const Left = styled.div`
  align-self: flex-start;
  flex: 5;
  min-height: 90vh;
  ${tablet({
    minHeight: 'fit-content',
    alignSelf: 'center'
  })}
`

export const CinemaInfo = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  ${bigMobile({
    fontSize: '1.5rem'
  })}
`

export const Screen = styled.div`
  height: 1rem;
  background-color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 1rem;
  max-width: 40rem;
  width: 100%;
  box-shadow: 2px 18px 21px 5px rgba(255, 255, 255, 1);
`

export const Right = styled.div`
  flex: 3;
  box-shadow: -5px 0px 6px -4px rgba(0, 0, 0, 0.69);
  ${tablet({
    width: '80%',
    boxShadow: 'none'
  })}
  ${bigMobile({
    width: '90%',
  })}
  ${mobile({
    width: '100%',
  })}
`

export const Guide = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 10px;
  color: white;
  ${mobile({
    marginTop: '1rem',
    marginBottom: '1.5rem',
    gap: '5px',
    flexWrap: 'wrap'
  })}
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    height: 15px;
    width: 15px;
    border-radius: 5px;
    background-color: ${({color}) => color};
    margin-right: 0.5rem;
  }
`

export const ResetButton = styled.button`
  border: none;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #a7c0cd;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`

