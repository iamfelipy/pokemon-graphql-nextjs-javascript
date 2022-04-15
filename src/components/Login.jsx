import { useRef, useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from "next/router";

export default function Login({auth}) {
  const { user, loginWithEmailPassword, error } = auth;
  const router = useRouter();

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  if(user){
    router.replace("/dashboard");
    return <></>;
  }

  function login(){
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    loginWithEmailPassword(email, password);
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={inputEmail}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={inputPassword}/>
            </FormControl>
            <Stack>
              {
                error && (
                  <Stack align={'center'}>
                    <Text fontSize={'lg'} color={'red'}>
                      { error }
                    </Text>
                  </Stack>
                )
              }
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={login}
                >
                Sign in
              </Button>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={login}
                >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}