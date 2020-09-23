import {
  ColorModeProvider,
  CSSReset,
  Flex,
  Text,
  ThemeProvider,
} from "@chakra-ui/core";
import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { customTheme } from "./theme";
import ThemeToggler from "./theme/toggler";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <Flex width="100%" textAlign="center" justify="center">
          <LoginForm />
        </Flex>
        <Text my={5} textAlign="center">
          Create React App Chakra UI
        </Text>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
