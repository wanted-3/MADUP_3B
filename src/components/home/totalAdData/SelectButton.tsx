import { ArrowIcon, CircleIcon } from 'assets/svgs'
import { useState, MouseEvent } from 'react'
import styles from './selectButton.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

const COLORS = [
  { name: 'ROAS', color: '#4FADF7' },
  { name: '광고비', color: '#AC8AF8' },
  { name: '노출수', color: '#D3A518' },
  { name: '클릭수', color: '#F88F6F' },
  { name: '전환수', color: '#85DA47' },
  { name: '매출', color: '#434656' },
]
interface Props {
  defaultSelect: string
  setSelectOption: ActionCreatorWithPayload<any, string>
  temp?: boolean
}

const SelectButton = ({ defaultSelect, setSelectOption, temp }: Props) => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const handleListOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    const currentValue = e.currentTarget.dataset.value
    dispatch(setSelectOption(currentValue))
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.selectBox}>
      <button className={styles.selectedOption} type='button' onClick={handleListOpen}>
        <CircleIcon style={{ fill: COLORS.find((item) => item.name === defaultSelect)?.color }} />
        <span className={styles.selectedTitle}>{defaultSelect}</span>
        <ArrowIcon />
      </button>

      {isOpen && (
        <ul className={styles.optionList}>
          {COLORS.map((v) => (
            <li key={`option-${v.name}`} className={styles.option}>
              <button type='button' data-value={v.name} onClick={handleSelect}>
                <CircleIcon style={{ fill: v.color }} />
                <span className={styles.title}>{v.name}</span>
              </button>
            </li>
          ))}

          {temp && (
            <li className={styles.option}>
              <button type='button' data-value='선택안함' onClick={handleSelect} className={styles.noSelect}>
                선택안함
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default SelectButton
