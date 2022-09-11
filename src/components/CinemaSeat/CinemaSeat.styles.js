import styled from "styled-components";


export const Container = styled.div`

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
`

export const Seat = styled.td`
  border-radius: 5px;
  background-color: #F7F9FD;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  
  &:hover {
    cursor: pointer;
  }

  ${({disable}) => disable && `
    background: #007bff;
    cursor: none;
  `};
  
  ${({selected}) => selected && `
    background: #03A9F4;
  `}
  
  &.sold {
    
  }
`