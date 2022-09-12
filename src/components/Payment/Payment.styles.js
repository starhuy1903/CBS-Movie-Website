import styled from 'styled-components'

export const Container = styled.div`
  //margin: 2rem auto;
  margin: 0 auto;
  padding: 2rem;
  -webkit-box-shadow: -6px -4px 6px -4px rgba(0, 0, 0, 0.69);
  box-shadow: -6px -4px 6px -4px rgba(0, 0, 0, 0.69);
  //text-align: center;

`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  //@media screen and (max-width: 1200px) {
  //}
`

export const Voucher = styled.div`
  display: flex;
  justify-content: center;

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--lightGrey);
    margin-right: 0.5rem;
    font-size: 16px;
  }

  button {
    border: none;
    //background-color: transparent;
    background-color: #FFC107;
    border-radius: 5px;
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export const MethodContainer = styled.div`
  margin-top: 1rem;

  h5 {
    font-size: 16px;
  }
`

export const Method = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  label {
    display: flex;
    align-items: center;

    img, svg {
      width: 25px;
      height: 25px;
      margin: 0 0.5rem;
    }
  }
`

export const Button = styled.button`
  align-self: center;
  width: 80%;
  max-width: 20rem;
  color: white;
  background-color: #FFC107;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  span {
    font-size: 16px;
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
  }

`

export const Amount = styled.p`
  color: white;
`

export const Message = styled.p`
  font-size: 14px;
  color: red;
`