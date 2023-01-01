import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../context/auth-context";
import {
  Input,
  StyledButton,
  StyledDivForm,
  CustomLink,
  Title,
} from "../components/input";
import styled from "@emotion/styled";
import { typography } from "../styles";
// import { findByLabelText } from "@testing-library/react";

const Wrapper = styled.div`
  width: 328px;
  height: 428px;
  background-color: #fff;
  border-radius: 0.5rem;
`;

function LoginForm() {
  const { login, navigate } = useAuth();
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function handleChange(event: ChangeEvent<HTMLFormElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    login && login(formData);
  }

  function handlePage() {
    navigate && navigate("/sign_up");
  }

  return (
    <>
      <Title>Sign in to your Account </Title>
      <Wrapper>
        <StyledDivForm>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              justifyContent: "center",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="example@mail.com"
              label="EMAIL"
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="*******"
              label="PASSWORD"
            />
            <StyledButton type="submit">Login</StyledButton>
          </form>
          <CustomLink onClick={handlePage}>Create Account</CustomLink>
        </StyledDivForm>
      </Wrapper>
    </>
  );
}

export default LoginForm;
