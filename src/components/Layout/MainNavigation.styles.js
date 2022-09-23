import styled from "styled-components";
import {bigMobile, mobile} from "../../responsive";

export const Header = styled.header`
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(54,54,55,1) 50%, rgba(33,33,33,1) 94%);
  box-shadow: 0px 1px 11px 2px #000000;
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
    color: white;
    height: 30px;
    width: 30px;
    cursor: pointer;
    ${bigMobile({
      display: "block",
    })}
  }
`

export const Logo = styled.div`
  img {
    width: 200px;
    ${mobile({
      width: '120px'
    })}
  }
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 30px;
    margin-right: 3rem;

    li {
      a {
        text-decoration: none;
        color: var(--white);
        font-weight: bold;
        font-size: 1.2rem;
        letter-spacing: 3px;
        transition: all 0.3s ease-in;

        &:hover {
          color: #ffdf47;
          border-color: #ffdf47;
          transform: scale(1.2);
        }
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
    justify-content: center;
    color: white;

    span {
      font-weight: bold;
    }
  }
  
  .loginBtn {
    position: relative;
    text-decoration: none;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 48px;
    width: 160px;
    font-weight: bold;
    height: 55px;
    --webkit-box-reflect: bottom 1px linear-gradient(transparent, #0004);
    border: 1px solid white;
    background: white;
    
    span {
      position: absolute;
      display: flex;
      justify-content: center;
      top: 4px;
      right: 4px;
      bottom: 4px;
      left: 4px;
      text-align: center;
      background: #2E2E2E;
      color: rgba(255, 255, 255, 0.781);
      transition: 0.5s;
      z-index: 1;
      
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: rgba(255,255,255,0.1);
      }
    }
    
    &:hover span {
      color: rgba(255,255,255,1);
    }
    
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: 400%;
      opacity: 0;
      transition: 0.5s;
      background: linear-gradient(45deg,#91155d,#525296,#0f0,#ff0,#fb0094,#00f,#0f0,#ff0);
      animation: animate123 20% linear infinte;
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: 400%;
      filter: blur(20px);
      transition: 0.5s;
      background: linear-gradient(45deg,#91155d,#525296,#0f0,#ff0,#fb0094,#00f,#0f0,#ff0);
      animation: animate123 20% linear infinte;
    }
    
    &:hover::before,
    &:hover::after {
      opacity: 1;
    }

    @keyframes animate123 {
      0% {
        background-position: 0 0;
      }

      50% {
        background-position: 300% 0;
      }

      100% {
        background-position: 0 0;
      }
    }
  }
  
  .profileBtn {
    --border-radius: 15px;
    --border-width: 4px;
    appearance: none;
    position: relative;
    padding: 0.75rem 1.5rem;
    border: 0;
    background-color: #212121;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    z-index: 2;

    &::after {
      --m-i: linear-gradient(#000, #000);
      --m-o: content-box, padding-box;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: var(--border-width);
      border-radius: var(--border-radius);
      background-image: conic-gradient(#488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb);
      -webkit-mask-image: var(--m-i), var(--m-i);
      mask-image: var(--m-i), var(--m-i);
      -webkit-mask-origin: var(--m-o);
      mask-origin: var(--m-o);
      -webkit-mask-clip: var(--m-o);
      mask-composite: exclude;
      -webkit-mask-composite: destination-out;
      filter: hue-rotate(0);
      animation: rotate-hue linear 500ms infinite;
      animation-play-state: paused;
    }
    
    &:hover::after {
      animation-play-state: running;
    }

    @keyframes rotate-hue {
      to {
        filter: hue-rotate(1turn);
      }
    }
    
    &, &::after {
      box-sizing: border-box;
    }
    
    &:active {
      --border-width: 5px;
    }
  }
`