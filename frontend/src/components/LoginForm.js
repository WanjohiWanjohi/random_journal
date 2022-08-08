import React, { useState } from "react";
import { useFormik } from 'formik';
import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  FormControl,
  FormLabel,
  Button,
  Container,
} from '@chakra-ui/react'
import * as Yup from 'yup';
import { Link } from '@chakra-ui/react'
import { string } from "prop-types";

const LoginForm = () => {
  const [show, setShow] = React.useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const handleClick = () => setShow(!show)

  function handleSubmit(event) {

    event.preventDefault()
    console.log(email)
    console.log(password)
    let loginUrl = 'http://127.0.0.1:8000/login'
    fetch(loginUrl, {
      method:'POST',
       headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"email": email, "password": password})}
    )
    .then((res)=>console.log(res.json()))
  }
  const formik = useFormik({
    initialValues: {
      pass: '',
      email: '',
    }, validationSchema: Yup.object({
      pass: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),

    })

  });
 

  return (
    <>
      <Container align="center"
        justify="center"
        wrap="wrap">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired >
            <FormLabel> Email</FormLabel>
            <Input type='email' id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </FormControl>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <FormControl isRequired>
            <FormLabel> Password</FormLabel>
            <InputGroup size='md'>
              <Input
                id="pass"
                name="pass"
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <InputRightElement width='4.5rem'  >
                <Button h='1.75rem' size='sm' >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>

            </InputGroup>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </FormControl>
          <FormControl>
            <Button type="submit"> Login</Button>
          </FormControl>
        </form>



      </Container>
      <Container centerContent my="3">
        <Link color='red.500' href='#'>
          Forgot Password
        </Link>
        <Text padding="0.5rem" margin="20">
          Haven't signed up yet?
          <Link color='teal.500' href='signup'>
            Sign up
          </Link>
        </Text>
      </Container>
    </>
  );
};

export default LoginForm;
