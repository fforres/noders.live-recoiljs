/// <reference types="next" />
/// <reference types="next/types/global" />

import "styled-components";
import { MyTheme } from "./styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
