import styled, { css } from "styled-components/native";

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 320px;
`;

const buttonStyle = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  height: 48px;
  margin-top: 32px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LoginButton = styled.TouchableOpacity`
  ${buttonStyle};
`;
export const LoginButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 16px;
`;

export const NewAccountButton = styled.TouchableOpacity`
  ${buttonStyle};
  margin-top: 0;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const NewAccountText = styled.Text`
  color: ${({ theme }) => theme.colors.gray.dark};
  font-size: 16px;
`;
