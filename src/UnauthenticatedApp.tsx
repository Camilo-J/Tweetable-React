import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ShowTweetPage from "./components/showTweetpage";
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
        <Route path="/" element={<HomePageNoUser />} />
        <Route path="/sign_up" element={<SignupForm />} />
        <Route path="/sign_in" element={<LoginForm />} />
        <Route path="/tweets/:id" element={<ShowTweetPage />} />
        <Route path="*" element={<HomePageNoUser />} />
      </Routes>
    </ContainerPage>
  );
}

export default UnauthenticatedApp;
