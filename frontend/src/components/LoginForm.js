import React , {useState} from "react";
import {
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  FormControl,
  FormLabel,
  Button,
  Flex
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Link } from '@chakra-ui/react'
function handleLoginSubmit(event) {
  event.preventDefault()
  console.log(event.target)
}
const LoginForm = (setToken) => {
  const [show, setShow] = React.useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const handleClick = () => setShow(!show)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const baseUrl = process.env.BASE_URL
  function handleEmailChange(event) {
    setEmail(event.target.value)
    console.log(email)
  }
  function passwordChange(val ) {setPassword(val)}
  return (
    <Flex align="center"
      justify="center"
      wrap="wrap">

      <FormControl isRequired isInvalid={errors.name}>
        <FormLabel> Email</FormLabel>
        <Input type='email' value={email}
        onChange={handleEmailChange}/>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormLabel> Password</FormLabel>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'  value={password}
        onChange={passwordChange}>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
      </FormControl>
      <FormControl>

        <Button type="submit" onClick={handleLoginSubmit}> Login</Button>
      </FormControl>
      <Link color='red.500' href='#'>
        Forgot Password
      </Link>
      <Text padding="0.5rem" margin="20">
        Haven't signed up yet?
        <Link color='teal.500' href='signup'>
          Sign up
        </Link>
      </Text>
    </Flex>
  );
};

export default LoginForm;
