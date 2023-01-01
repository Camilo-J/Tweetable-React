import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePageNoUser from "./pages/homepage-nouser";
import LoginForm from "./pages/login-page";
import SignupForm from "./pages/signup-form";
import { colors, typography } from "./styles";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ContainerPage>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePageNoUser />}></Route>
        <Route path="/sign_up" element={<SignupForm />} />
        <Route path="/sign_in" element={<LoginForm />} />
        <Route path="*" element={<HomePageNoUser />}></Route>
      </Routes>
    </ContainerPage>
  );
}

export default UnauthenticatedApp;
