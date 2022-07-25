import React, { FC, SVGProps } from 'react'
import Vector from '../../icons/Vector.svg'
import LogotypeLight from '../../icons/logo-light.svg'
import LogotypeDark from '../../icons/logo-dark.svg'
import { FCProps } from '../../types'

type IconProps = FCProps & SVGProps<any>

const VectorIcon: FC<IconProps> = (props) => <Vector {...props} />
const LogoLight: FC<IconProps> = (props) => <LogotypeLight {...props} />
const LogoDark: FC<IconProps> = (props) => <LogotypeDark {...props} />

export { VectorIcon, LogoDark, LogoLight }
