import React, { FC } from 'react'
import { FCProps } from '../../types'
import Header from './Header/Header'

const Layout: FC<FCProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <footer>footer</footer>
    </>
  )
}

export default Layout
