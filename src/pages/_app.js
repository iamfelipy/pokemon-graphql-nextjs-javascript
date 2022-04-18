import "~/config/firebase.config";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { AuthProvider } from '~/hook/auth';
import AuthStateChanged from '~/layout/AuthStateChanged';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '~/styles/theme';

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AuthStateChanged>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AuthStateChanged>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
