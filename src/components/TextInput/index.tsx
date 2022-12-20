import React, { useState } from "react";

import { useTheme } from "styled-components";

import { Container, Input } from "./styles";
import { TextInputProps } from "./types";

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  leftContent: LeftContent,
  rightContent: RightContent,
  onChange,
  marginBottom,
  ...rest
}) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container
      marginBottom={marginBottom}
      {...rest}
      style={[{}, rest?.multiline && { height: "auto" }]}
    >
      {LeftContent ? (
        <LeftContent
          color={isFocused || value?.length ? theme.colors.gray.dark : theme.colors.gray.light}
        />
      ) : null}
      <Input
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray.regular}
        autoCapitalize="none"
        keyboardType="default"
        {...rest}
      />
      {RightContent ? (
        <RightContent
          color={isFocused || value?.length ? theme.colors.gray.dark : theme.colors.gray.light}
        />
      ) : null}
    </Container>
  );
};
