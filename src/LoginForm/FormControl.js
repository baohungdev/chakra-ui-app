import { Box, Button, FormLabel, Input } from "@chakra-ui/core";
import React from "react";

export const FormControl = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Email</FormLabel>
      </FormControl>
      <Button type="submit"></Button>
    </Box>
  );
};
