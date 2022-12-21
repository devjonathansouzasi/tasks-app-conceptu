import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const LogoutButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  bottom: 24px;
  left: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const LogoutButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray.dark};
`;
