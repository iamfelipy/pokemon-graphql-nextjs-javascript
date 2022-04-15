import "~/config/firebase.config";
import { AuthProvider } from '~/hook/auth';
import AuthStateChanged from '~/layout/AuthStateChanged';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '~/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default MyApp
