import { MouseEvent } from 'react'

import styles from './advertiseManageToggle.module.scss'

interface Props {
  item: {
    name: string
    state: string
  }
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const AdvertiseStateToggle = ({ item, onClick }: Props) => {
  return (
    <li key={item.name} className={styles.toggleItem}>
      <button type='button' value={item.state} onClick={onClick}>
        {item.name}
      </button>
    </li>
  )
}

export default AdvertiseStateToggle
