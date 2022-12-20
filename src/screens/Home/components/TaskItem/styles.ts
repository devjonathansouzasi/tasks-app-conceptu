import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 72px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const Left = styled.View`
  margin-right: 16px;
`;

export const Content = styled.View`
  flex: 1;
  align-self: stretch;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray.dark};
  font-size: 16px;
`;
export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: 16px;
`;

export const Right = styled.View``;

export const ShowOptionsButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})``;
