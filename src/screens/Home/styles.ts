import Constants from "expo-constants";
import styled from "styled-components/native";

const { statusBarHeight } = Constants;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const Header = styled.View`
  margin-top: ${statusBarHeight}px;
  padding: 24px 0;
`;
export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const NewTaskButton = styled.TouchableOpacity`
  position: absolute;
  right: 32px;
  bottom: 32px;
  padding: 16px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
