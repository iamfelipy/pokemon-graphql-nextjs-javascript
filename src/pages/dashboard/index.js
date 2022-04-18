import React, { useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';
import { withProtected } from "~/hook/route";
import { useQuery, gql } from "@apollo/client";
import ContentPokemon from "./components/ContentPokemon";
import { MenuSideBar } from "./styles";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;
const gqlVariables = {
  limit: 1126,
  offset: 0,
};

function SidebarWithHeader({ children, auth }) {
  const { data: { pokemons: { results = [] } = {} } = {} } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  const [exibirPokemon, setExibirPokemon] = useState({
    dreamworld: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    id: 1,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    name: "bulbasaur"
  });

  function handleExibirPokemon({name,image,dreamworld, id}) {
    setExibirPokemon({
      id,
      name,
      image,
      dreamworld
    });
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box height="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        pokemons={results}
        handleExibirPokemon={handleExibirPokemon}
        auth={auth}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} pokemons={results} handleExibirPokemon={handleExibirPokemon} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} style={{backgroundColor: "#2cb3e8"}} auth={auth} />
      <Box ml={{ base: 0, md: 60 }} p="4" style={{backgroundColor: "#2cb3e8", minHeight: "calc(100% - 80px)"}}>
        <ContentPokemon data={exibirPokemon} />
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, pokemons, handleExibirPokemon, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      height="100%"
      {...rest}>
      <MenuSideBar>
        <div>
          POKEDEX&nbsp;&nbsp;
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </div>
        <div>
          { pokemons?.map((pokemon, index) => (
            <div onClick={() => handleExibirPokemon(pokemon)} key={index}>{`${index+1} - ${pokemon.name}`}</div>
          ))}
        </div>
      </MenuSideBar>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, handleExibirPokemon, pokemons, auth, ...rest }) => {
  console.log(auth)
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        POKEDEX
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FaSignOutAlt />}
          onClick={()=>auth.logout(auth.logout)}
        />
      </HStack>
    </Flex>
  );
};

export default withProtected(SidebarWithHeader);
