import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./pages/login-page";
import SignupForm from "./pages/signup-form";
import { colors, typography } from "./styles";

const CustomLink = styled("button")`
  border: none;
  background: none;
  cursor: pointer;
  color: ${colors.blue[500]};
  &:hover {
    color: ${colors.gray.medium};
  }
`;

const Wrapper = styled.div`
  width: 328px;
  height: 428px;
  background-color: #fff;
`;
const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  font-style: normal;
  height: 100%;
  font-weight: 500;
`;

const Title = styled.h1`
  ${typography.head.sm}
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkChange(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }

  return (
    <ContainerPage>
      <Header></Header>
      <Title>Sign in to your Account </Title>
      <Wrapper>
        <TotalWrapper>
          {showLogin ? <LoginForm /> : <SignupForm />}

          <CustomLink onClick={handleLinkChange}>
            {showLogin ? "Create Account" : "Sign in"}
          </CustomLink>
        </TotalWrapper>
      </Wrapper>
    </ContainerPage>
  );
}

export default UnauthenticatedApp;
