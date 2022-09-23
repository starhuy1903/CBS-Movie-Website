import styled from 'styled-components'
import {bigMobile, mobile} from "../../responsive";

export const Container = styled.div`
  min-height: 90vh;

  ${bigMobile({
    minHeight: '70vh'
  })}
  ${mobile({
    minHeight: '50vh'
  })}
`

export const Banner = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url(${({image}) => image}), var(--darkGrey);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 90vh;
  ${bigMobile({
    minHeight: '70vh'
  })}
  ${mobile({
    minHeight: '50vh'
  })}
`
