import styled from "styled-components";
import {devices} from "../../GlobalStyle";


export const Container = styled.div`
  background: var(--medGrey);
  padding: 2rem 1rem;
  display: flex;

  @media${devices.mobile} {
    flex-direction: column;
  }
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  border-right: 1px solid var(--lightGrey);

  @media${devices.mobile} {
    border-bottom: 1px solid var(--lightGrey);
    border-right: none;
    padding: 1rem 0;
  }
`

export const Title = styled.h3`
  color: var(--white);
  font-weight: bold;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 4px 15px;
  margin-bottom: 20px;

  @media${devices.landscapeMobile} {
    font-size: 15px;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media${devices.mobile} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Logo = styled.img`
  display: block;
  width: 60px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    border: 2px solid #13b4ff;
    border-radius: 50%;
  }

  &.active {
    border: 2px solid #13b4ff;
    border-radius: 50%;
    box-shadow: 3px 4px 13px 0px rgba(255, 255, 255, 1);
  }

  @media${devices.mobile} {
    width: 40px;
  }
`

export const Right = styled.div`
  flex: 2;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media${devices.mobile} {
    padding: 1rem 0;
  }
`

export const ShowTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`

export const CinemaInfo = styled.div`
  display: flex;
  margin-bottom: 30px;
`

export const CinemaImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 30px;

  @media${devices.mobile} {
    margin-right: 15px;
    width: 70px;
    height: 70px;
  }
`

export const CinemaDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const CinemaName = styled.h3`
  color: lightgray;
  margin-bottom: 5px;

  @media${devices.mobile} {
    font-size: 16px;
  }
`

export const CinemaAddress = styled.p`
  font-size: var(--fontSuperSmall);
`

export const TimeWrapper = styled.div`
  margin-top: 10px;
  display: block;
`

export const TimeButton = styled.button`
  text-decoration: none;
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