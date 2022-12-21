import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const Left = styled.View`
  flex: 1;
`;

const textStyle = css`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const CloseButton = styled(TouchableOpacity).attrs({ activeOpacity: 0.7 })``;
export const CloseButtonText = styled.Text`
  ${textStyle};
  font-size: 16px;
  font-weight: normal;
`;
export const Content = styled.View``;
export const TitleText = styled.Text`
  ${textStyle};
`;
export const Right = styled.View`
  flex: 1;
`;
