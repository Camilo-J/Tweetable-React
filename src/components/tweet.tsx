import styled from "@emotion/styled";
import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";

import Avatar from "../assets/avatar.png";
import { colors } from "../styles";
import { typography } from "../styles";

dayjs.extend(relativeTime);
interface Props {
  children?: React.ReactNode;
  color?: string;
  gap?: number;
  type?: "head" | "text";
  size?: keyof typeof typography.head;
}

interface Tweet {
  name: string;
  username: string;
  body: string;
  date: string;
  image?: string;
  likes: number;
  comments: number;
}

const Container = styled.div`
  width: 375px;
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
`;

const HeaderTweet = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderTweetData = styled.div`
  display: flex;
  gap: 0.4rem;
`;
const ImgTweet = styled.img`
  width: 3rem;
  height: 3rem;
  border-raidus: 50%;
`;
const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  line-height: 1.5rem;
  color: ${colors.stone[300]};
`;

const FooterCardOptions = styled.div<Props>`
  display: flex;
  gap: ${(p) => p.gap}rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

const Sentence = styled.p<Props>`
  ${(p) => typography[p.type || "text"][p.size || "md"]}
  color: ${(p) => p.color};
`;

const Tweet = ({
  name,
  username,
  body,
  date,
  image,
  likes,
  comments,
}: Tweet) => {
  return (
    <Container>
      <HeaderTweet>
        <ImgTweet src={Avatar} />
        <div>
          <HeaderTweetData>
            <Sentence type={"text"} size={"lg"}>
              {name}
            </Sentence>
            <Sentence color="#F490B1" type={"text"} size={"md"}>
              @{username}
            </Sentence>
          </HeaderTweetData>
          <Sentence type={"text"} size={"sm"} color={"#7A7A7A"}>
            {dayjs(date).fromNow(true)} ago
          </Sentence>
        </div>
      </HeaderTweet>
      <p className="body-card text-gray-400">{body}</p>

      <FooterCard>
        <FooterCardOptions gap={1.5}>
          <BiTrash />
          <FiEdit />
        </FooterCardOptions>
        <FooterCardOptions gap={0.7}>
          <Icon>
            <FaRegCommentDots />
            {comments}
          </Icon>

          <Icon>
            <HiOutlineHeart />
            {likes}
          </Icon>
        </FooterCardOptions>
      </FooterCard>
    </Container>
  );
};

export default Tweet;
