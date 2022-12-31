import { ChangeEvent, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { useAuth } from "../context/auth-context";
import { Input } from "../components/input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;

  margin-bottom: 24px;

  width: 213px;
  height: 424px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 36px;

  width: 213px;
  height: 424px;
`;

const StyledButton = styled.button`
  display: flex;
  width: 167px;
  height: 36px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${colors.blue[500]};
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
  const { signup } = useAuth();
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

  return (
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
    </Wrapper>
  );
}

export default SignupForm;
