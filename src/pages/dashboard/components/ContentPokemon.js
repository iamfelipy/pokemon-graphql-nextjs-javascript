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
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { useQuery, gql } from "@apollo/client";
import { ContentPokemonStyle } from "./styles";
import Image from 'next/image'

/*
    height x
    weight x
    atributtes x
    types x
    description
    evolution
*/

const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            height
            weight
            stats {
                base_stat
                stat {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
        }
    }
`;
const gqlVariablesPokemon = {
    name: "ditto"
};

const GET_EVOLUTION_CHAIN = gql`
    query evolutionChain($id: String!) {
        evolutionChain(id: $id) {
        params
        status
        message
        response
        }
    }
`
const gqlVariablesEvolutionChain = {
    "id": "1"
};

function ContentPokemon(props) {

    let pokemon;
    let chain;

    const {
        name = " ", 
        id = " ",
        image = " ",
        dreamworld = " "
    } = props.data;

    
    let { data: data1 } = useQuery(GET_POKEMON, { variables: {name} });
    let { data: data2 } = useQuery(GET_EVOLUTION_CHAIN, { variables: {id: new String(id)} });


    if(data1 && data1?.pokemon){
        pokemon = {...data1?.pokemon};
    }

    if(data2 && data2?.evolutionChain?.response?.chain){
        chain = {...data2?.evolutionChain?.response?.chain};
    }

    return (
        <ContentPokemonStyle>
            {
                dreamworld && (
                    <div className="container-imagem container-generico-pokemon">
                        <img src={dreamworld} width="250px" height="250px" />
                    </div>
                )
            }
            <div className="container-generico-pokemon">
                <div className="titulo">Name</div>
                <div style={{color: "black"}}>
                    { pokemon?.name }
                </div>
            </div>
            <div className="container-generico-pokemon">
                <div className="titulo">Attributes</div>
                <div style={{color: "black"}}>
                    {pokemon?.types?.map(({type}) =>
                        (<div key={type.name}> 
                            {`${type.name}`} 
                        </div>)
                    )}
                </div>
            </div>
            <div className="container-generico-pokemon"> 
                <div className="titulo">Height</div>
                <div>{pokemon?.height}</div>
            </div>
            <div className="container-generico-pokemon">
                <div className="titulo">Weight</div>
                <div>{pokemon?.weight}</div>
            </div>
            <div className="container-generico-pokemon">
                <div className="titulo">Attributes</div>
                <div>
                    {pokemon?.stats?.map(stat =>
                        (<div key={stat?.stat?.name}> 
                            {`${stat?.stat?.name} - ${stat?.base_stat}`} 
                        </div>)
                    )}
                </div>
            </div>
        </ContentPokemonStyle>
    );
}

export default ContentPokemon;
