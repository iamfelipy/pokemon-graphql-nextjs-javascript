import Head from 'next/head'
import Image from 'next/image'
import Header from '~/components/Header'
import Login from '~/components/Login'

const PageComponent = () => {
  return (
    <div>
      <Header />
      <Login />
    </div>
  )
}

export default PageComponent
