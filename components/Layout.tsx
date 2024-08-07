import React from 'react'
import Navbar from './Navbar'
import TopFooter from './TopFooter';
import Footer from './Footer';

interface Props {
  children : React.ReactElement;
}

const Layout = ({children}:Props) => {
  return (
    <>
      <Navbar /> 
      <main>
        {children}
      </main>
      <TopFooter />
      <Footer />
    </>
  )
}

export default Layout
