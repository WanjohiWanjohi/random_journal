import React from "react";
import { Container, LinkBox, Box, VStack, Heading, LinkOverlay } from '@chakra-ui/react'
import OwnJournals from "./OwnJournals";
const Home = () => {
    function handleClick(e) {
        console.log("The link was clicked.");

    }
    return (

        <VStack>
            <Container maxW='l' bg='pink.300' color='white' size='md' mx='10' centerContent h="20">

                <LinkBox as='article' w="50%" borderWidth='2px' rounded='md' my='2' px='5'>
                    <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                        {new Date().toLocaleDateString()}
                    </Box>
                    <Heading size='md' my='2'>
                        <LinkOverlay href='write' bg='white.300'>
                            Write something today
                        </LinkOverlay>
                    </Heading>
                </LinkBox>
            </Container>
            <Container >
                <OwnJournals></OwnJournals>

            </Container>
        </VStack>
    );
};

export default Home;