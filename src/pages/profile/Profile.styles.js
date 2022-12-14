import styled from 'styled-components'
import {bigMobile, mobile, tablet} from "../../responsive";

export const Container = styled.div`
  width: 70%;
  min-width: 20rem;
  max-width: 75rem;
  color: white;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;

  ${tablet({
    width: '80%'
  })}
  ${bigMobile({
    flexDirection: 'column',
    width: '90%'
  })}
`

export const Top = styled.div`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  ${tablet({
    // width: '80%'
  })}
  ${bigMobile({
    flexDirection: 'column',
    // width: '90%'
  })}
`

export const Left = styled.div`
  flex: 1;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(42, 37, 60, 1) 50%, rgba(29, 21, 121, 0.7852063301282051) 94%);
  min-height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  ${bigMobile({
    gap: '2rem'
  })}
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-top: 1rem;
    ${bigMobile({
      fontSize: '20px',
      marginTop: '0.5rem',
    })}
  }
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  ${bigMobile({
    width: '100px',
    height: '100px',
  })}
`

export const Buttons = styled.div`
  display: flex;
  margin-top: 2rem;
  ${bigMobile({
    marginTop: '1rem',
  })}
`

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }

  &.leftBtn {
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
  }

  &.rightBtn {
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
  }
`

export const Right = styled.div`
  flex: 2;
  background: #e1e5e9;
  color: #000;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${mobile({
    alignItems: 'center'
  })}

`

export const Title = styled.h3`
  font-size: 40px;
  border-bottom: 1px solid var(--lightGrey);
  width: 100%;
  text-align: center;
  ${bigMobile({
    fontSize: '30px'
  })}
}
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${bigMobile({
    justifyContent: 'center'
  })}
  ${mobile({
    flexDirection: 'column',
    alignItems: 'flex-start',
  })}
`

export const Item = styled.div`
  min-width: 50%;
  margin-top: 2rem;

  span {
    color: var(--lightGrey);
    font-size: 16px;
  }

  p {
    margin-top: 0.6rem;
    color: #212121;
    font-weight: 600;
    font-size: 18px;
  }
`

export const Bottom = styled.div`
  //background: #e1e5e9;
  margin-top: 2rem;
`
