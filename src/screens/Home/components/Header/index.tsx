import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { RouteNames } from "../../../../constants/routeNames";
import { Container, TitleText, OpenSettingsButton } from "./styles";
export const Header: React.FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const handleOpenSettingsModal = () => {
    navigate(RouteNames.PRIVATE.SETTINGS_MODAL);
  };

  return (
    <Container>
      <TitleText>Minhas tarefas</TitleText>
      <OpenSettingsButton onPress={handleOpenSettingsModal}>
        <MaterialIcons name="settings" size={24} color={colors.gray.dark} />
      </OpenSettingsButton>
    </Container>
  );
};
