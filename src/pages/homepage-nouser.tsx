import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Tweet from "../components/tweet";
import { useAuth } from "../context/auth-context";
import { getTweets } from "../services/tweet-services";
import { typography } from "../styles";

const Container = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.p`
  ${typography.head.sm}
`;

const ContainerTweets = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const HomePageNoUser = () => {
  const [tweets, setTweets] = useState([]);
  const { login } = useAuth();
  useEffect(() => {
    getTweets()
      .then((data) => setTweets(data))
      .catch(console.log);
  }, []);

  return (
    <Container>
      <Header></Header>
      <Title>Home</Title>
      <ContainerTweets>
        {tweets.map((elem, index) => (
          <Tweet key={index}></Tweet>
        ))}
      </ContainerTweets>
    </Container>
  );
};

export default HomePageNoUser;
