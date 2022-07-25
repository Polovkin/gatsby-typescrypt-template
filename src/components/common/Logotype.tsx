import React, { FC, SVGProps } from 'react'
import { FCProps } from '../../types'
import { LogoDark, LogoLight } from './Icon'

export enum LogoTypes {
  Light = 'light',
  Dark = 'dark',
}

type Props = FCProps &
  SVGProps<any> & {
    type?: LogoTypes
  }

const Logotype: FC<Props> = ({ type = LogoTypes.Light }, props) => {
  switch (type) {
    case LogoTypes.Light:
      return <LogoLight {...props} />
    case LogoTypes.Dark:
      return <LogoDark {...props} />
    default:
      return <LogoLight {...props} />
  }
}

export default Logotype
