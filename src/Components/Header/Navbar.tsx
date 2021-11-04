import styled from "styled-components";
import close from "/assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
}
interface NavState {
  isOpen: boolean;
}

const Navbar: React.FC<Props> = ({ isOpen, onOpen }) => {
  const closeNavHandler = () => {
    onOpen();
  };

  return (
    <Container isOpen={isOpen}>
      <Close src={close} onClick={closeNavHandler} />
      <NavLinks onClick={closeNavHandler}>
        <li>
          <Link activeClassName="active" to="/home">
            <span>00</span> HOME
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/destination">
            <span>01</span> DESTINATION
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/crew">
            <span>02</span> CREW
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/technology">
            <span>03</span> TECHNOLOGY
          </Link>
        </li>
      </NavLinks>
    </Container>
  );
};

const Container = styled.nav<NavState>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;

  padding-block: 2.1rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  transform: ${({ isOpen }) =>
    !isOpen ? "translateX(100%)" : "translateX(0)"};
  transition: 0.3s;

  @media screen and (min-width: 768px) {
    all: revert;
  }
  @media screen and (min-width: 1025px) {
    &::after {
      position: absolute;
      right: 725px;
      top: 88px;
      content: "";
      height: 1px;
      width: 20%;
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;
const NavLinks = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding-left: 2rem;
  li {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    --paddingBackground: 2.5rem;
    padding-inline: var(--paddingBackground);
    flex-direction: row;
    gap: 2.5rem;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
  @media screen and (min-width: 1025px) {
    padding-left: 8rem;
    padding-right: 10.5rem;
  }
`;

const Close = styled.img`
  margin-left: auto;
  margin-bottom: 4rem;
  padding-right: 1.75rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Link = styled(NavLink)`
  display: flex;
  width: 100%;
  letter-spacing: 0.27ch;
  color: white;

  @media screen and (min-width: 768px) {
    padding-block: var(--paddingBackground);
  }

  &:hover {
    --borderColor: rgba(255, 255, 255, 0.5);
    border-right: 4px solid var(--borderColor);
    @media screen and (min-width: 768px) {
      border-right: none;
      border-bottom: 4px solid var(--borderColor);
    }
  }

  &.active {
    --borderColor: white;

    border-right: 4px solid var(--borderColor);
    @media screen and (min-width: 768px) {
      border-right: none;
      border-bottom: 4px solid var(--borderColor);
    }
  }
  span {
    margin-right: 1ch;
    font-weight: 700;
    color: white;
    @media screen and (min-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 1025px) {
      display: inline;
    }
  }
`;

export default Navbar;
