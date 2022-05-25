import { ArrowIcon, CircleIcon } from 'assets/svgs'
import { useState, MouseEvent } from 'react'
import styles from './selectButton.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

const COLORS = [
  ['ROAS', '#4FADF7'],
  ['광고비', '#AC8AF8'],
  ['노출수', '#F9F871'],
  ['클릭수', '#F88F6F'],
  ['전환수', '#85DA47'],
  ['매출', '#7FA2FF'],
]
interface Props {
  defaultSelect: string
  setSelectOption: ActionCreatorWithPayload<any, string>
}

const SelectButton = ({ defaultSelect, setSelectOption }: Props) => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const handleListOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => {
    const currentValue = e.currentTarget.dataset.value
    dispatch(setSelectOption(currentValue))
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.selectBox}>
      <button className={styles.selectedOption} type='button' onClick={handleListOpen}>
        <CircleIcon
          className={styles.circle}
          style={{ fill: COLORS[COLORS.map((v) => v[0]).findIndex((v) => v === defaultSelect)][1] }}
        />
        <span className={styles.selectedTitle}>{defaultSelect}</span>
        <ArrowIcon />
      </button>

      {isOpen && (
        <ul className={styles.optionList}>
          {COLORS.map((v, idx) => {
            const key = `option__${idx}`
            return (
              <li key={key} data-value={v[0]} className={styles.option} onClick={handleSelect} role='presentation'>
                <CircleIcon style={{ fill: v[1] }} />
                <span className={styles.title}>{v[0]}</span>
              </li>
            )
          })}

          {/* {setSecondOption && (
            <li className={styles.option} onClick={handleSelect} role='presentation'>
              <span className={styles.noSelect}>선택안함</span>
            </li>
          )} */}
        </ul>
      )}
    </div>
  )
}

export default SelectButton
