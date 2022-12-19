// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from "styled-components";

import { LightThemeProps } from "./variants";

type BaseTheme = LightThemeProps;

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
