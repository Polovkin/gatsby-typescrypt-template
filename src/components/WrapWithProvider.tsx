import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store'

const WrapWithProvider: FC<{ element: any }> = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

export default WrapWithProvider
