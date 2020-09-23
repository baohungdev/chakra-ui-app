import {
  ColorModeProvider,
  CSSReset,
  Text,
  ThemeProvider,
} from "@chakra-ui/core";
import React from "react";
import { SignInLayout } from "./layout/SignIn/SignIn";
import { Header } from "./section/Header/Header";
import { customTheme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Header />
        <SignInLayout />
        <Text my={5} textAlign="center">
          Create React App Chakra UI
        </Text>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
