import * as React from 'react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/layout/Layout'
import { FCProps } from '../types'
import { decrement, increment } from '../store/counter/counterSlice'

const IndexPage: FC<FCProps> = () => {
  // @ts-ignore
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <Layout>
      <div>
        <div style={{ padding: 50 }}>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
