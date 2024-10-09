import React from 'react'
import Menu from '../Menu'
import Main from '../Main'
import Footer from '../Footer'

export default function Layout({children}) {
  return (
    <>
        <Menu />
        <Main> {children} </Main>
        <Footer />
    </>
  )
}
