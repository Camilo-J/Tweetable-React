import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";
import { colors, typography } from "../styles";

export const StyledButton = styled("button")`
  border: none;
  width: 100%;
  height: 36px;
  background: ${colors.pink[300]};
  color: ${colors.white};
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 0 auto 0 auto;
`;
export const Title = styled.h1`
  ${typography.head.sm}
`;

export const StyledDivForm = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
`;

export const CustomLink = styled("button")`
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 0.5rem;
  color: ${colors.pink[400]};
  &:hover {
    color: ${colors.gray.medium};
  }
`;

const StyledLabel = styled("label")`
  text-align: left;
`;

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  width: 296px;
`;

const StyledInput = styled("input")`
  border: none;
  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  align-items: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 10px;

  width: 296px;
  height: 40px;

  border: 1px solid #d3d3d3;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  border-radius: 6px;
  ::placeholder {
    color: ${colors.gray.light};
  }
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  ${typography.text.md};
  margin: 0;
`;

interface Props {
  id?: string;
  name: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler;
  placeholder: string;
  label: string;
}

export function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}: Props) {
  return (
    <StyledDiv>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}

      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledDiv>
  );
}
