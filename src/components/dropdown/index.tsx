import { ArrowIcon } from 'assets/svgs'
import { MouseEvent, ReactNode } from 'react'
import styles from './dropdown.module.scss'

interface Props {
  onClick?: (event: MouseEvent<HTMLSelectElement>) => void
  children: ReactNode
}

const Dropdown = ({ onClick, children }: Props) => {
  return (
    <select className={styles.dropdown} onClick={onClick}>
      {children}
    </select>
  )
}

export default Dropdown
