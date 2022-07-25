import React, { FC } from 'react'
import * as styles from './Header.module.scss'
import { FCProps } from '../../../types'
import Logotype from '../../common/Logotype'
import { VectorIcon } from '../../common/Icon'

type HeaderProps = FCProps
const mockList1 = ['home', 'news', 'about', 'careers']
const mockLlist2 = ['your applications', 'our solutions', 'service', 'contacts']
const Header: FC<HeaderProps> = () => (
  <header className={styles.header}>
    {/*  <div className="block xl:hidden">Menu</div>
    <div className="h-5 w-40 xl:h-12 xl:w-72">
      <Logotype />
    </div>
    <div className="hidden bg-secondary py-5 pr-28 xl:block">
      <nav className="mb-7">
        <ul className="flex">
          {mockList1.map((item) => (
            <li className="flex items-center text-white" key={item}>
              <span className="capitalize">{item}</span>
              <VectorIcon width={18} height={10} className="relative top-0.5" />
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="flex">
          {mockLlist2.map((item) => (
            <li className="mr-10 flex items-center font-bold text-white" key={item}>
              <span className="text-3xl capitalize">{item}</span>
              <VectorIcon className="relative top-0.5 h-2 w-4" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="block xl:hidden">X</div> */}
  </header>
)

export default Header
