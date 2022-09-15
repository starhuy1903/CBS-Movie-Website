import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  
  .pagination {
    align-self: center;
    margin-top: 1rem;
    color: white;
    
    button {
      background-color: #e8e8e8;
      font-size: 18px;
      font-weight: bold;
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      z-index: 1;
      overflow: hidden;
      
      &::before {
        content: '';
        width: 0;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
        transition: .5s ease;
        display: block;
        z-index: -1;
      }
      
      &:hover {
        background-color: white;
      }
      
      &.Mui-selected {
        color: #0681f0;
        box-shadow: 6px 6px 12px #c5c5c5,
          -6px -6px 12px #ffffff;
      }
      
      &:hover::before {
        width: 40px;
      }
    }
  }
`