import styled from 'styled-components'

export const Container = styled.div`
  height: 500px;
`

export const Banner = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url(${({image}) => image}), var(--darkGrey);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
`
