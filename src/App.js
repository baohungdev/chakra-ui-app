import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { SignInLayout } from "./layout/SignIn/SignIn";
import { customTheme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <SignInLayout />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
