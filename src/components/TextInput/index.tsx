import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components";

import { Container, Input } from "./styles";
import { TextInputProps } from "./types";

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  leftContent: LeftContent,
  rightContent: RightContent,
  onChangeText,
  secureTextEntry,
  marginBottom,
  ...rest
}) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(secureTextEntry);

  const handleClearText = () => {
    if (value?.length && !!onChangeText) {
      onChangeText("");
    }
  };

  return (
    <Container
      marginBottom={marginBottom}
      {...rest}
      style={[{}, rest?.multiline && { height: "auto" }]}
    >
      {LeftContent ? (
        <LeftContent color={isFocused || value?.length ? colors.gray.dark : colors.gray.light} />
      ) : null}
      <Input
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={colors.gray.regular}
        autoCapitalize="none"
        keyboardType="default"
        secureTextEntry={secureText}
        {...rest}
      />
      <>
        {value?.length && secureTextEntry ? (
          <TouchableOpacity style={{ marginRight: 8 }} onPress={() => setSecureText(old => !old)}>
            <Ionicons
              name={secureText ? "eye-off-outline" : "eye-outline"}
              size={24}
              color={colors.gray.dark}
            />
          </TouchableOpacity>
        ) : null}
        {value?.length ? (
          <TouchableOpacity onPress={handleClearText}>
            <Ionicons name="close-circle-outline" size={24} color={colors.gray.dark} />
          </TouchableOpacity>
        ) : null}
        {RightContent ? <RightContent color={colors.gray.dark} /> : null}
      </>
    </Container>
  );
};
