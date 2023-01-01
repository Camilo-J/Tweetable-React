import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";

import Tweet from "../components/tweet";
import { createTweet, getTweets } from "../services/tweet-services";
import { colors, typography } from "../styles";

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
  width: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 136px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonTweet = styled.button`
  width: 67px;
  height: 28px;
  background-color: ${colors.pink[300]};
  color: ${colors.white};
  border: none;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  align-self: flex-end;
`;

const Input = styled.textarea`
  width: 100%;
  height: 96px;
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
`;

const HomePageUser = () => {
  const [tweets, setTweets] = useState<DataTweet[]>([]);
  const [formdata, setFormData] = useState({
    body: "",
    user: 1,
  });

  useEffect(() => {
    getTweets()
      .then((data) => setTweets(data))
      .catch(console.log);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createTweet(formdata)
      .then((data) => {
        setTweets([data, ...tweets]);
      })
      .catch(console.log);
    setFormData({ ...formdata, body: "" });
  }

  function handleChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  }

  return (
    <Container>
      <Title>Home</Title>
      <FormContainer>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0rem",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.25rem 0.5rem",
          }}
          onSubmit={handleSubmit}
        >
          <Input
            name="body"
            value={formdata.body}
            onChange={handleChange}
            placeholder="Remember to think before write"
          />

          <ButtonTweet type="submit">TWEET</ButtonTweet>
        </form>
      </FormContainer>
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

export default HomePageUser;
