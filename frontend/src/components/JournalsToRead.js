import React from "react";
import {
    List,
    ListItem,
    VStack,
    Container,
    Text,
    SimpleGrid,
    Box
} from '@chakra-ui/react'

const JournalsToRead = () => {
    // todo: Add in token validation
    const journals = []
    return (
        <>
            <VStack>
                <Container maxW='l' bg='white.300' color='black' size='md' mx='10' h="20">
                    <List spacing={3} my="5">
                        <Text> {journals.length} journals loaded</Text>
                        <ListItem>
                            {journals.map((entry) => (entry.journal))}
                        </ListItem>
                    </List>
                </Container>
            </VStack>
            <SimpleGrid columns={2} spacing={10} my="10" mx="20">
            {/* TODO: Replace this with a map of journals to read */}
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
            </SimpleGrid>
        </>

    );
};

export default JournalsToRead;