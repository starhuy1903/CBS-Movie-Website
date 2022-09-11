import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`

export const Wrapper = styled.div`

`

export const MovieName = styled.h1`
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image = styled.img`
  display: block;
  margin-right: 2rem;
  border-radius: 5px;
  max-height: 320px;
  object-fit: cover;
  max-width: 300px;
`

export const Details = styled.div`
  margin-top: 1rem;
`

export const DetailItem = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  
  span {
    font-weight: 200;
    margin-right: 5px;
    font-size: 14px;
  }
`

