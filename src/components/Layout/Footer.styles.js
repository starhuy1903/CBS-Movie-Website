import styled from "styled-components";


export const Container = styled.footer`
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(54,54,55,1) 50%, rgba(33,33,33,1) 94%);
  color: white;
  padding: 2rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
`

export const CompanyData = styled.div`
  flex: 2;
    
    p {
      margin-top: 2rem;
      font-size: 14px;
      color:  #B2B1B6;
      font-weight: 500;
    }
`

export const Partner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  
`

export const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 5px;
`

export const BrandLogo = styled.img`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
`

export const CompanySupport = styled.div`
  padding: 1rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
`

export const SupportLink = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  
  
  p {
    color: #B2B1B6;
    font-size: 14px;
  }
`