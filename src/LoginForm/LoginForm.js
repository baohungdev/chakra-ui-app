import { Box, Flex, Heading } from "@chakra-ui/core";
import React from "react";
import { FormField } from "./FormControl";

export const LoginForm = () => {
  return (
    <>
      <Flex align="center" justifyContent="center">
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={0.5}
          borderRadius={8}
          boxShadow="lg"
          minWidth="350px"
        >
          <Box>
            {/*Container of Form's Header */}
            <Heading>Login</Heading>
          </Box>
          <FormField />
        </Box>
      </Flex>
    </>
  );
};
