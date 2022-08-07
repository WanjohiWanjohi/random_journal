import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  Link,
  Flex
} from '@chakra-ui/react'

const SignUpForm = () => {
  return (
    <>
    <Flex margin="10" justify="center">
    Welcome to Random Journal!
    </Flex>
    <Flex justify="center">
    Write and receive journals for free, become a member for additional features.

    </Flex>
      <FormControl isRequired>
        <FormLabel> Email</FormLabel>
        <Input placeholder='Email' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel> Password</FormLabel>
        <Input placeholder='Password' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel> Confirm Password</FormLabel>
        <Input placeholder='Confirm Password' />
      </FormControl>
      <FormControl >
        <Button> SignUp</Button>
      </FormControl>
    <Flex justify="center" >
    <Text padding="0.5rem" margin="10" >
        By using this app, you agree to Random Journal's 
        <Link color='teal.500' href='#'>
          <p>privacy policy & Terms of use.</p>
        </Link>
      </Text>
      
    </Flex>
     <Flex justify="center">
     <Text padding="0.5rem" margin="10">
      Already have an account?
        <Link color='teal.500' href='login'>
        Log in
        </Link>
      </Text>
     </Flex>

    </>
  );
};

export default SignUpForm;
