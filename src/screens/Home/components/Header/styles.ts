import { TouchableOpacity } from "react-native";

import Constants from "expo-constants";
import styled from "styled-components/native";

const spaceTop = Constants.statusBarHeight + 16;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spaceTop}px 0 16px;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const OpenSettingsButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;
