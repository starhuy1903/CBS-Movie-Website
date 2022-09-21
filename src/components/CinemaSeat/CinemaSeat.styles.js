import styled from "styled-components";
import {devices} from "../../GlobalStyle";


export const Container = styled.div`
  margin-top: 2rem;
`

export const Table = styled.table`
  display: flex;
  justify-content: center;
`

export const TableBody = styled.tbody`

`

export const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 10px;

@media${devices.mobile} {
  gap: 2px;
  margin-bottom: 4px;
}
`

export const Seat = styled.td`
  border-radius: 5px;
  background-color: var(--availableColor);
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }

  ${({vip}) => vip && `
    background: var(--vipSeatColor);
  `};

  ${({selected}) => selected && `
    background: var(--selectedColor);
  `}

  ${({disable}) => disable && `
    background: var(--soldColor);
    &:hover {
      cursor: not-allowed;
    }
  `};

  @media screen and (max-width: 720px) {
    height: 20px;
    width: 20px;
    font-size: 9px;
  }

`