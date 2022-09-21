import styled from "styled-components";
import loginBg from '../../assets/images/login-bg.jpg'
import {devices} from "../../GlobalStyle";

export const Container = styled.div`
  width: 90%;
  min-width: 20rem;
  max-width: 75rem;
  color: var(--white);
  margin: 3rem auto;
  display: flex;
  min-height: 70vh;
  box-shadow: -1px 3px 14px -2px #000000;
  border-radius: 15px;
  overflow: hidden;
`

export const Left = styled.div`
  flex: 3;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(42,37,60,1) 50%, rgba(29,21,121,0.7852063301282051) 94%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  min-height: 100%;
`

export const Logo = styled.img`
  width: 150px;
  margin-top: 1rem;
  margin-left: 1.5rem;
  display: block;
  align-self: flex-start;
`

export const Title = styled.h1`
  margin-top: 2rem;
  font-weight: bold;
`

export const IconContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  .icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 0.2rem;
    border: 1px solid #cfd8dc;

    &:hover {
      cursor: pointer;
      border-color: #81d4fa;
    }
  }
`

export const Form = styled.form`
  margin-top: 2rem;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .form-control {
    margin-top: 1rem;

    .inputContainer {
      border: 1px solid var(--white);
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0.75rem 1rem;
      border-radius: 5px;

      input {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        color: white;
        font-size: 1rem;

        &::placeholder {
          color: #bdbdbd;
        }
      }

      .inputIcon {
        height: 30px;
        width: 30px;
      }
    }
  }
`

export const ErrorText = styled.span`
  color: #FF3D00;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`

export const Right = styled.div`
  flex: 2;
  background-image: url(${loginBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: -3px -1px 16px -5px #000000;

  @media${devices.landscapeMobile} {
    display: none;
  }
`

export const Feature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 14px;

  .rememberMe {

    label {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  a {
    color: white;
  }
`

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  max-width: 50%;
  align-self: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 20px;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    color: #fff;
    border-color: #29b6f6;
    background-color: #29b6f6;
    box-shadow: 0px 15px 20px #29b6f6;
  }

`

export const Bottom = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  margin-top: 3rem;

  p {
    margin-right: 0.75rem;
    color: #bdbdbd;
    font-size: 13px;
  }

  a {
    color: #81d4fa;
    font-weight: bold;
    font-size: 14px;
  }
`

