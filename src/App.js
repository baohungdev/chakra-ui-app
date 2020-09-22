import React from "react";
import {
  ThemeProvider,
  CSSReset,
  Box,
  Image,
  Flex,
  Badge,
  Text,
  ColorModeProvider,
} from "@chakra-ui/core";
import { MdStar } from "react-icons/md";
import { customTheme } from "./theme";
import ThemeToggler from "./theme/toggler";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <Text textAlign="center">Create React App Chakra UI</Text>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
