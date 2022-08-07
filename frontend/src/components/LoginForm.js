import React from "react";
import {
  Input,
  Text,
  FormControl,
  FormLabel,
  Button,
  Flex
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
const LoginForm = () => {
  return (
    <Flex  align="center"
      justify="center"
      wrap="wrap">
      <FormControl isRequired>
        <FormLabel> Email</FormLabel>
        <Input placeholder='Email' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel> Password</FormLabel>
        <Input placeholder='Password' />
      </FormControl>
      <FormControl>

        <Button> Login</Button>
      </FormControl>
      <Link color='red.500' href='#'>
        Forgot Password
      </Link>
      <Text  padding="0.5rem" margin="20">
        Haven't signed up yet?
        <Link color='teal.500' href='signup'>
          Sign up 
        </Link>
      </Text>
    </Flex>
  );
};

export default LoginForm;
