import './App.css';
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Container 
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="yellow.200"
      mx="40" mt="10">
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production
      </Container>
    </ChakraProvider>
  )
}
export default App;
