import React from "react";
import { useColorMode, Box, IconButton } from "@chakra-ui/core";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" ml={5}>
      <IconButton
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        bg="transparent"
      />
    </Box>
  );
}
