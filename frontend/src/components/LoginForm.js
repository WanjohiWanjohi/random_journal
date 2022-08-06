import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const LoginForm = () => {
  return (
    <>
    <FormControl isRequired>
      <FormLabel> Email</FormLabel>
      <Input placeholder='Email' />
    </FormControl>
    <FormControl isRequired>
      <FormLabel> Password</FormLabel>
      <Input placeholder='Password' />
    </FormControl>
    </> 
  );
};

export default LoginForm;
