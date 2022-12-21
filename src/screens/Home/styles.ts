import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const NewTaskButton = styled.TouchableOpacity`
  position: absolute;
  right: 24px;
  bottom: 24px;
  padding: 14px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
