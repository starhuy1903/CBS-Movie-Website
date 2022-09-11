import styled from 'styled-components'

export const Button = styled.button`
  margin-right: 10px;
  color: var(--white);
  background: transparent;
  padding: 2px 4px;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #ffdf47;
    border-color: #ffdf47;
  }
`