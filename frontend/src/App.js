import './App.css';
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import {
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import JournalForm from './components/JournalForm';
function App() {
  return (
    <ChakraProvider>
      <Header />
      {
                <Routes>
                  <Route exact path="/login" element={<LoginForm />} />
                  <Route exact path="/signup" element={<SignUpForm />} />
                  <Route exact path="/journal" element={<JournalForm />} />
                </Routes>
              }   
    </ChakraProvider>
  )
}
export default App;
