import styled from 'styled-components';

export const ContentPokemonStyle = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100% - 80px);

    .container-generico-pokemon {
        background-color: white;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        color: black;
    }

    .container-imagem {
        display: flex;
        justify-content: center;
    }

    .titulo {
        color: black;
        font-weight: bolder;
    }
`