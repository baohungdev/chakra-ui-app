import { Flex, Text } from "@chakra-ui/core";
import React from "react";
import { LoginForm } from "../../section/LoginForm/LoginForm";
import { Header } from "../../section/Header/Header";
export const SignInLayout = () => {
  return (
    <>
      <Header />
      <Flex my={50} width="100%" textAlign="center" justify="center">
        <LoginForm />
      </Flex>
      <Text my={5} textAlign="center">
        Create React App Chakra UI
      </Text>
    </>
  );
};
