import { ChangeEvent, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { useAuth } from "../context/auth-context";
import { Input, CustomLink, Title } from "../components/input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0px;
`;
const ContainerPage = styled.div`
  width: 328px;
  // height: 428px;
  background-color: #fff;
  border-radius: 0.5rem;
`;

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 36px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${colors.pink[300]};
  border-radius: 0.5rem;
  color: ${colors.white};
  border: none;
  ${typography.text.md}
  line-height: 1em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray["medium"]};
  }
`;

function SignupForm() {
  const { signup, navigate } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: "",
  });
  const { email, password, name, username, password_confirmation, avatar } =
    formData;

  function handleChange(event: ChangeEvent<HTMLFormElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signup && signup(formData);
  }

  function handlePage() {
    navigate && navigate("/sign_in");
  }
  return (
    <>
      <Title>Create an Account</Title>
      <ContainerPage>
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="*******"
              label="Name"
            />
            <Input
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
              placeholder="*******"
              label="Username"
            />
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="example@mail.com"
              label="Email"
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="*******"
              label="Password"
            />
            <Input
              name="password_confirmation"
              type="password"
              value={password_confirmation}
              onChange={handleChange}
              placeholder="*******"
              label="Password Confirmation"
            />
            <Input
              name="avatar"
              type="file"
              value={password_confirmation}
              onChange={handleChange}
              placeholder="*******"
              label="Avatar"
            />
            <StyledButton type="submit">Create Account</StyledButton>
          </Form>
          <p>Already a Menmber?</p>
          <CustomLink onClick={handlePage}>Sign in</CustomLink>
        </Wrapper>
      </ContainerPage>
    </>
  );
}

export default SignupForm;
