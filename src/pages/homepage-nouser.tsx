import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import Tweet from "../components/tweet";
import { useAuth } from "../context/auth-context";
import { typography } from "../styles";
import { DataTweet, PropsCompo } from "../UnauthenticatedApp";

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

const HomePageNoUser = ({ tweets }: PropsCompo) => {
  const { navigate } = useAuth();

  function navigateTweet(id: number) {
    navigate && navigate(`/tweets/${id}`);
  }

  return (
    <Container>
      <Title>Home</Title>
      <ContainerTweets>
        {tweets?.map((elem: DataTweet, index: number) => (
          <Tweet
            key={index}
            id={elem.id}
            name={elem.user_data.name}
            body={elem.body}
            username={elem.user_data.username}
            date={elem.updated_at}
            image={elem.user_data.user_image}
            likes={elem.likes_count}
            comments={elem.replies_count}
            handleNavigate={navigateTweet}
          ></Tweet>
        ))}
      </ContainerTweets>
    </Container>
  );
};

export default HomePageNoUser;
