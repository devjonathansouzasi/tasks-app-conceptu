import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const SubmitButton = styled(TouchableOpacity).attrs({
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
  background-color: ${({ theme }) => theme.colors.primary};
`;
