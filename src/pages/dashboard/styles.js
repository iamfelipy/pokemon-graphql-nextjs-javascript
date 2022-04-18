import styled from 'styled-components';

export const MenuSideBar = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #c04c4b;

    & > div:first-child {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
    }

    & > div:last-child {
        padding: 10px;
        flex: 1;
        overflow-y: scroll;

        /* width */
        &::-webkit-scrollbar {
        width: 10px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: #888;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: #555;
        }

        & > div {
            cursor: pointer;
        }
    }
    

`