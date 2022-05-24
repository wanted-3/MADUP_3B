import store from 'store'
import { ArrowIcon, CircleIcon } from 'assets/svgs'
import { useState, MouseEvent } from 'react'
import styles from './selectButton.module.scss'

const colors = [
  ['ROAS', '#4FADF7'],
  ['광고비', '#AC8AF8'],
  ['노출수', '#F9F871'],
  ['클릭수', '#F88F6F'],
  ['전환수', '#85DA47'],
  ['매출', '#7FA2FF'],
]

interface Props {
  defaultSelect: string
  firstOption: string
  secondOption: string
  setFirstOption?: (target: string | undefined) => void
  setSecondOption?: (target: string | undefined) => void
}

const SelectButton = ({ defaultSelect, firstOption, secondOption, setFirstOption, setSecondOption }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSelected, setIsSelected] = useState<string | undefined>(defaultSelect)

  const handleListOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => {
    const currentValue = e.currentTarget.dataset.value
    if (firstOption !== currentValue && secondOption !== currentValue) {
      if (setFirstOption) {
        setFirstOption(currentValue)
        store.set('firstOption', currentValue)
      }
      if (setSecondOption) {
        setSecondOption(currentValue)
        store.set('secondOption', currentValue)
      }
      setIsSelected(currentValue)
      setIsOpen((prev) => !prev)
    }
  }

  return (
    <div className={styles.selectBox}>
      <button className={styles.selectedOption} type='button' onClick={handleListOpen}>
        <CircleIcon
          className={styles.circle}
          style={{ fill: colors[colors.map((v) => v[0]).findIndex((v) => v === isSelected)][1] }}
        />
        <span className={styles.selectedTitle}>{isSelected}</span>
        <ArrowIcon />
      </button>
      {isOpen && (
        <ul className={styles.optionList}>
          {colors.map((v, idx) => {
            const key = `option__${idx}`
            return (
              <li key={key} data-value={v[0]} className={styles.option} onClick={handleSelect} role='presentation'>
                <CircleIcon style={{ fill: v[1] }} />
                <span className={styles.title}>{v[0]}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SelectButton
