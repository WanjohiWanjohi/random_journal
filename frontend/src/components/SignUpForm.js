import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const SignUpForm = () => {
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

export default SignUpForm;
