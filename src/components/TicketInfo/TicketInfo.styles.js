import styled from 'styled-components'

export const Container = styled.div`
  color: var(--white);
  padding: 2rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const Title = styled.h3`
  font-size: 20px;
`

export const Quantity = styled.span`
  display: block;
  padding: 0.5rem;
  background-color: #FFB300;
  border-radius: 5px;
`

export const Content = styled.div`
  background-color: var(--white);
  color: var(--darkGrey);
  padding: 1rem;
  border-radius: 15px;
`

export const MovieInfo = styled.div`

`

export const MovieName = styled.h3`
  font-weight: bold;
`

export const Time = styled.p`

`

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const DetailItem = styled.div`
  min-width: 50%;
  padding: 0.5rem;

  h5 {
    font-size: 12px;
    color: var(--lightGrey);
    font-weight: 400;
  }
  
  p {
    color: var(--darkGrey);
    font-weight: 700;
    font-size: 16px;
  }
`

export const CodeScan = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--lightGrey);
`