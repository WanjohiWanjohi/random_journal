import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="gray.400"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="m">Random Journal</Heading>
      </Flex>
      <Flex  align="end">
      <Flex padding="0.5rem">
        <Link href="login">
        Login
        </Link>
      </Flex>
      <Flex padding="0.5rem">
        <Link href="signup">Sign Up</Link>
      </Flex>
      
      </Flex>
    </Flex>
  );
};

export default Header;
