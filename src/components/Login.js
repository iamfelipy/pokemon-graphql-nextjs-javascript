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
import Image from 'next/image'
import { useRouter } from "next/router";

export default function Login({auth}) {
  const { user, loginWithEmailPassword, signUpEmailPassowrd, error } = auth;
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

  function signUp(){
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    signUpEmailPassowrd(email, password);
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={"white"}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>POKEDEX</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Image 
              src="/images/pokeball.svg" 
              alt="Landscape picture"
              width={150}
              height={150}
            />
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
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
                bg={"#c04c4b"}
                color={'white'}
                onClick={login}
                >
                Sign in
              </Button>
              <Button
                bg={'white'}
                color={'#c04c4b'}
                onClick={signUp}
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