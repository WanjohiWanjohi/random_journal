import './App.css';
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import JournalForm from './components/JournalForm';
import React, { useState } from 'react';
import JournalsToRead from './components/JournalsToRead';
function App() {
  const [token, setToken] = useState();
  
  return (
    <ChakraProvider>
      <Header />
     
      {
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUpForm />} />
                <Route exact path="/journal" element={<JournalForm />} />
                <Route exact path="/journals-to-read" element={<JournalsToRead />} />
                </Routes>
              }   
    </ChakraProvider>
  )
}
export default App;
