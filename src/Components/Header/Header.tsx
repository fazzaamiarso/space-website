import styled from "styled-components";
import logo from "/assets/shared/logo.svg";
import hamburger from "/assets/shared/icon-hamburger.svg";
import Navbar from "./Navbar";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Logo src={logo} />
      <Menu src={hamburger} onClick={toggleNavHandler} />
      <Navbar onOpen={toggleNavHandler} isOpen={isOpen} />
    </Container>
  );
};

const Container = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  @media screen and (min-width: 768px) {
    padding: 0;
    padding-left: 2.5rem;
  }
  @media screen and (min-width: 1025px) {
    padding: 2.5rem 3.5rem;
    padding-right: 0;
  }
`;
const Logo = styled.img``;
const Menu = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default Header;
