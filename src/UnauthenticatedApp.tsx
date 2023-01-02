import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ShowTweetPage from "./components/showTweetpage";
import HomePageNoUser from "./pages/homepage-nouser";
import LoginForm from "./pages/login-page";
import SignupForm from "./pages/signup-form";
import { getTweets } from "./services/tweet-services";
import { colors, typography } from "./styles";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export interface DataTweet {
  id: number;
  body: string;
  replies_count: number;
  likes_count: number;
  user_data: { name: string; username: string; user_image: string };
  likes: [{}];
  updated_at: string;
}

export interface PropsCompo {
  tweets: DataTweet[];
  handleTweet: Function;
}

function UnauthenticatedApp() {
  const [tweets, setTweets] = useState<DataTweet[]>([]);

  useEffect(() => {
    getTweets().then(setTweets).catch(console.log);
  }, []);

  function handleTweet(data: DataTweet) {
    setTweets([data, ...tweets]);
  }

  return (
    <ContainerPage>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<HomePageNoUser tweets={tweets} handleTweet={handleTweet} />}
        />
        <Route path="/sign_up" element={<SignupForm />} />
        <Route path="/sign_in" element={<LoginForm />} />
        <Route
          path="/tweets/:id"
          element={<ShowTweetPage tweets={tweets} handleTweet={handleTweet} />}
        />
        <Route
          path="*"
          element={<HomePageNoUser tweets={tweets} handleTweet={handleTweet} />}
        />
      </Routes>
    </ContainerPage>
  );
}

export default UnauthenticatedApp;
