import styled from "styled-components";

export const Header = styled.header`
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(42,37,60,1) 50%, rgba(29,21,121,0.7852063301282051) 94%);

  padding: 0 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  position: relative;

  .menuIcon {
    display: none;
  }

  @media screen and (max-width: 768px) {

    .menuIcon {
      display: block;
      color: white;
      height: 30px;
      width: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const Logo = styled.div`
  img {
    width: 200px;

    @media screen and (max-width: 576px) {
      width: 120px;
    }
  }
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 30px;
    margin-right: 3rem;
  }

  li {
    a {
      text-decoration: none;
      color: var(--white);
      font-weight: bold;
      font-size: 1.2rem;

      &:hover {
        color: #ffdf47;
        border-color: #ffdf47;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;

    &.expanded {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: -20px;
      top: 60px;
      background-color: rgba(0.46,0.46,0.46, 0.5);
      border-radius: 10px;
      padding: 2rem;

      ul {
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-right: 0;
        margin-top: 1rem;

        li {
          a {
            font-size: 1rem;
          }
        }
      }
    }
  }
`

export const Profile = styled.div`

  .icon {
    margin-right: 0.4rem;
    height: 40px;
    width: 40px;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;

    span {
      font-weight: bold;
    }
  }
`