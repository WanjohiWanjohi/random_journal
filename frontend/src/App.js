import './App.css';
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import Landing from './components/Landing';
import React, { useState , useEffect } from 'react';
import JournalsToRead from './components/JournalsToRead';
import JournalForm from './components/JournalForm';
import LoginForm from './components/LoginForm';

function App() {
  const [token, setToken] = useState();
  const apiURL= process.env.API_URL
  useEffect(()=>{
   },[])
  
  return (
    <ChakraProvider>
      <Header />
     
      {
                <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/signup" element={<SignUpForm />} />
                <Route exact path="/login" element={<LoginForm  />} />
                <Route exact path="/journals-to-read" element={<JournalsToRead />} />
                <Route exact path="/write" element={<JournalForm />} />
                </Routes>
              }   
    </ChakraProvider>
  )
}
export default App;
