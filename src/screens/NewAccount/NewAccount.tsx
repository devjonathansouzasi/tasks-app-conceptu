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

export const NewAccount: React.FC = () => {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    navigate(RouteNames.PRIVATE.ROOT);
  };
  const handleBackToLogin = () => {
    goBack();
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
              placeholder="Nome ou apelido"
              leftContent={({ color }) => (
                <MaterialIcons name="person-outline" size={24} color={color} />
              )}
              marginBottom={8}
            />
            <TextInput
              value={username}
              onChangeText={value => setUsername(value)}
              placeholder="Seu melhor email"
              leftContent={({ color }) => (
                <MaterialIcons name="mail-outline" size={24} color={color} />
              )}
              marginBottom={8}
            />
            <TextInput
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder="Uma senha top"
              secureTextEntry
              leftContent={({ color }) => (
                <MaterialIcons name="lock-outline" size={24} color={color} />
              )}
            />
            <LoginButton onPress={handleCreateAccount}>
              <LoginButtonText>Criar</LoginButtonText>
            </LoginButton>
            <NewAccountButton onPress={handleBackToLogin}>
              <NewAccountText>Já tenho uma conta. Voltar ao login!</NewAccountText>
            </NewAccountButton>
          </FormContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
