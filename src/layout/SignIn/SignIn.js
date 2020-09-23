import { Flex } from "@chakra-ui/core";
import React from "react";
import { LoginForm } from "../../section/LoginForm/LoginForm";

export const SignInLayout = () => {
  return (
    <Flex my={50} width="100%" textAlign="center" justify="center">
      <LoginForm />
    </Flex>
  );
};
