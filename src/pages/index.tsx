import * as React from 'react'
import { FC } from 'react'
import Layout from '../components/layout/Layout'
import { FCProps } from '../types'

const IndexPage: FC<FCProps> = () => {
  return (
    <Layout>
      <h1>Main page</h1>
      <h2>Main page</h2>
      <h3>Main page</h3>
      <h4>Main page</h4>
      <h5>Main page</h5>
    </Layout>
  )
}

export default IndexPage
