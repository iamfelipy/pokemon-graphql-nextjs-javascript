import { extendTheme } from '@chakra-ui/react'

const customTheme = {
    config: {
        initialColorMode: 'dark',
    },
    fonts: {},
    colors: {
        // brand: {
        //     900: '#1a365d',
        //     800: '#153e75',
        //     700: '#2a69ac',
        // },
    }
}

export const theme = extendTheme(customTheme)