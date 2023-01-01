import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Tweet from "../components/tweet";
import { getTweets } from "../services/tweet-services";
import { typography } from "../styles";

interface DataTweet {
  id: number;
  body: string;
  replies_count: number;
  likes_count: number;
  user_data: { name: string; username: string; user_image: string };
  likes: [{}];
  updated_at: string;
}

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
  useEffect(() => {
    getTweets()
      .then((data) => setTweets(data))
      .catch(console.log);
  }, []);

  return (
    <Container>
      <Title>Home</Title>
      <ContainerTweets>
        {tweets.map((elem: DataTweet, index) => (
          <Tweet
            key={index}
            name={elem.user_data.name}
            body={elem.body}
            username={elem.user_data.username}
            date={elem.updated_at}
            image={elem.user_data.user_image}
            likes={elem.likes_count}
            comments={elem.replies_count}
          ></Tweet>
        ))}
      </ContainerTweets>
    </Container>
  );
};

export default HomePageNoUser;
