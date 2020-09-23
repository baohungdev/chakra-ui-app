import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";

export const FormField = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [Value, setValue] = useState(initialValues);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      setValue(values);
      alert(JSON.stringify(Value, null, 2));
      resetForm();
    },
  });

  return (
    <Box my={4} textAlign="left">
      <form onSubmit={formik.handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="test@test.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
        <FormControl mt={6} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="********"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>
        <Button
          type="submit"
          variantColor="teal"
          variant="outline"
          width="full"
          mt={4}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};
