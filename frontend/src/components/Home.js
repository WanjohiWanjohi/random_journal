import React from "react";
import { Container, Textarea, VStack } from '@chakra-ui/react'
import JournalForm from "./JournalForm";
const Journals = () => {

    return (

        <VStack>
             <Container maxW='md' bg='blue.600' color='white'>
                
                <JournalForm></JournalForm>
             </Container>
        </VStack>
    );
};

export default Journals;