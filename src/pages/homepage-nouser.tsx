import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Tweet from "../components/tweet";
import { getTweets } from "../services/tweet-services";

const Container = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const HomePageNoUser = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets()
      .then((data) => setTweets(data))
      .catch(console.log);
  }, []);

  console.log(tweets);
  return (
    <Container>
      <p>Home</p>
      <div>
        {tweets.map((elem, index) => (
          <Tweet key={index}></Tweet>
        ))}
      </div>
    </Container>
  );
};

export default HomePageNoUser;
