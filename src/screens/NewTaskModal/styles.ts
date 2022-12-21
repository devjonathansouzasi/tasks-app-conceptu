import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
`;

export const SubmitButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.common.white};
`;
