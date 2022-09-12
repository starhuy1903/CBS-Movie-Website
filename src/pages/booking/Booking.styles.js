import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`

export const Left = styled.div`
  flex: 5;
  background-color: #6d6d6d;
  min-height: 100vh;
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
  
  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`

export const Screen = styled.div`
  height: 1rem;
  background-color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  max-width: 40rem;
  width: 100%;
`

export const Right = styled.div`
  flex: 3;
`

export const Guide = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 10px;
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

