import Head from 'next/head'
import Image from 'next/image'
import Header from '~/components/Header'
import Login from '~/components/Login'
import { withPublic } from "~/hook/route";

const PageComponent = ({auth}) => {

  return (
    <>
      <Header />
      <Login auth={auth} />
    </>
  )
}

export default withPublic(PageComponent);
