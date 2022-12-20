import React, { useState } from "react";
import { Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { TextInput } from "../../components";
import { RouteNames } from "../../constants/routeNames";
import {
  FormContainer,
  LoginButton,
  LoginButtonText,
  NewAccountButton,
  NewAccountText,
} from "./styles";

export const Login: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate(RouteNames.PRIVATE.ROOT);
  };
  const handleNavigateToNewAccount = () => {
    navigate(RouteNames.PUBLIC.NEW_ACCOUNT);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: colors.background.default,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormContainer>
            <TextInput
              value={username}
              onChangeText={value => setUsername(value)}
              placeholder="Digite seu email"
              leftContent={({ color }) => (
                <MaterialIcons name="mail-outline" size={24} color={color} />
              )}
              marginBottom={8}
            />
            <TextInput
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder="Digite sua senha"
              secureTextEntry
              leftContent={({ color }) => (
                <MaterialIcons name="lock-outline" size={24} color={color} />
              )}
            />
            <LoginButton onPress={handleLogin}>
              <LoginButtonText>Entrar</LoginButtonText>
            </LoginButton>
            <NewAccountButton onPress={handleNavigateToNewAccount}>
              <NewAccountText>Criar conta</NewAccountText>
            </NewAccountButton>
          </FormContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
