import styled from "styled-components";


export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
`

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
`

export const Title = styled.h1`
  color: white;

  @media screen and (max-width: 768px) {
    font-size: var(--fontBig);
  }
`

export const Content = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, 1fr);
  grid-gap: 2rem;
  
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`