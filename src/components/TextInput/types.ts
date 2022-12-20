import { TextInputProps as RNTextInputProps } from "react-native";

export type TextInputProps = RNTextInputProps & {
  leftContent?: ({ color }: { color: string }) => JSX.Element;
  rightContent?: ({ color }: { color: string }) => JSX.Element;
  marginBottom?: number;
};
