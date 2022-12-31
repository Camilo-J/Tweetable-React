import styled from "@emotion/styled";
import { useState } from "react";

import Tweetable from "../assets/Tweetable.png";
import { colors } from "../styles";

interface PropsStyle {
  active: boolean;
}

const Container = styled.div`
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const Secondary = styled.div<PropsStyle>`
  padding: 0 1rem;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  // transition: all 0.5s;
  // opacity: 0;
  // opacity: ${({ active }) => (active ? "1" : "0")};
`;

const Button = styled.p`
  padding: 6px 10px;
  background-color: ${colors.pink[300]};
  color: #fff;
  border-radius: 0.25rem;
`;

const Img = styled.img`
  object-fit: contain;
`;

const Navbar = styled.button<PropsStyle>`
  display: flex;
  flex-direction: column;
  width: 2.5rem;
  height: 1.6rem;
  border: 0;
  background: transparent;
  gap: 0.45rem;
  div {
    background: black;
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transition: all 0.5s;
    transform-origin: left;
  }

  ${({ active }) =>
    active
      ? `  div:first-of-type {
  transform: rotate(40deg);
}

div:nth-of-type(2) {
  opacity: 0;
}

div:last-of-type {
  transform: rotate(-40deg);
}`
      : ""}
`;

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  function handleNavbar() {
    setOpenNav(!openNav);
  }
  return (
    <Container>
      <Main>
        <Img src={Tweetable} alt="logo-Home" />
        <Navbar onClick={handleNavbar} active={openNav}>
          <div></div>
          <div></div>
          <div></div>
        </Navbar>
      </Main>

      <Secondary active={openNav}>
        <p>Login to start the tweeting madness!</p>
        <Button>Login</Button>
      </Secondary>
    </Container>
  );
};

export default Header;
