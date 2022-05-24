import styles from './dropdown.module.scss'

interface Props {
  list: string[]
}

const Dropdown = ({ list }: Props) => {
  return (
    <select className={styles.dropDown}>
      {list.map((el) => (
        <option key={`DropdownKey__${el}`}>{el}</option>
      ))}
    </select>
  )
}

export default Dropdown
