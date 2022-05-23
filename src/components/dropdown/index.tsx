import { useState } from 'react'
import styles from './dropdown.module.scss'

interface Props {
  list: string[]
}

const Dropdown = ({ list }: Props) => {
  const [opened, setOpened] = useState(false)

  const handleDropdown = () => {
    setOpened((prev) => !prev)
  }

  return (
    <select>
      {list.map((el) => (
        <option key={`DropdownKey__${el}`}>{el}</option>
      ))}
    </select>
  )
}

export default Dropdown
