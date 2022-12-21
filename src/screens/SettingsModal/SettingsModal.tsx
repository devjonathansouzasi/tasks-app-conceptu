import { Switch } from "react-native";

import { useTheme as useThemeSC } from "styled-components";

import { useTheme } from "../../hooks/useTheme";
import { Container, LogoutButton, LogoutButtonText } from "./styles";

export const SettingsModal: React.FC = () => {
  const { colors } = useThemeSC();
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <Container>
      <Switch
        value={currentTheme === "light"}
        onChange={toggleTheme}
        trackColor={{
          true: colors.background.paper,
        }}
        thumbColor={colors.primary}
      />
      <LogoutButton>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};
