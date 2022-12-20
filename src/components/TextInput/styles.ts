import styled from "styled-components/native";

type InputProps = {
  marginBottom?: number;
};

export const Container = styled.View<InputProps>`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  height: 56px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0"}px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const Input = styled.TextInput`
  flex: 1;
  align-self: stretch;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray.regular};
`;
