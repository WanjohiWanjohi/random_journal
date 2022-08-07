import React from "react";
import {
  List,
  ListItem,
  Container,
  Text
} from '@chakra-ui/react'
const OwnJournals = () => {
    const journals= []

    // TODO: Fetch journals from db
    
    return (
            <List spacing={3} my="5">
            <Text> {journals.length} journals loaded</Text>
                <ListItem>
                {journals.map((entry)=>(entry.journal))}
                </ListItem>
            </List>

    );
};

export default OwnJournals;