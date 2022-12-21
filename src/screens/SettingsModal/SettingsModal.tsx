import { Switch } from "react-native";

import { signOut } from "firebase/auth";
import { useTheme as useThemeSC } from "styled-components";

import ModalHeader from "../../components/ModalHeader";
import { firAuth } from "../../config/firebase";
import { useTheme } from "../../hooks/useTheme";
import { Container, Content, LogoutButton, LogoutButtonText } from "./styles";

export const SettingsModal: React.FC = () => {
  const { colors } = useThemeSC();
  const { currentTheme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await signOut(firAuth);
  };

  return (
    <Container>
      <ModalHeader title="Preferências" />
      <Content>
        <Switch
          value={currentTheme === "light"}
          onChange={toggleTheme}
          trackColor={{
            true: colors.background.paper,
          }}
          thumbColor={colors.primary}
        />
        <LogoutButton onPress={handleLogout}>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </Content>
    </Container>
  );
};
