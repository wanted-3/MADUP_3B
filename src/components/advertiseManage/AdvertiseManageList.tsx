import { MouseEvent, useMemo, useState } from 'react'
import cx from 'classnames'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'

import { ChangeAdListData, selectadListData, selectedState } from 'states/adListData'
import styles from './advertiseManageList.module.scss'
import AdvertiseManageItem from './AdvertiseManageItem'
import AdvertiseStateToggle from './AdvertiseStateToggle'
import { ArrowIcon } from 'assets/svgs'

const AD_STATE_GROUP = [
  { name: '전체 광고', state: 'all' },
  { name: '진행 광고', state: 'active' },
  { name: '중단 광고', state: 'ended' },
]

const AdvertiseManageList = () => {
  const [toggle, setToggle] = useState(false)

  const dispatch = useAppDispatch()
  const adListData = useAppSelector(selectadListData)
  const adListState = useAppSelector(selectedState)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  const handleAdStateClick = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(ChangeAdListData(e.currentTarget.value))
    setToggle((prev) => !prev)
  }

  const adListStateName = useMemo(() => {
    let adStateName

    if (adListState === 'all') adStateName = '전체 광고'
    if (adListState === 'active') adStateName = '진행 광고'
    if (adListState === 'ended') adStateName = '중단 광고'

    return adStateName
  }, [adListState])

  return (
    <div className={styles.containerWrapper}>
      <h1 className={styles.title}>광고관리</h1>

      <div className={styles.itemWrapper}>
        <div className={styles.itemTop}>
          <div className={styles.toggleButton}>
            <button type='button' className={styles.selectedToggle} onClick={handleToggle}>
              <span>{adListStateName}</span>
              <ArrowIcon className={styles.arrowIcon} />
            </button>

            <ul className={cx(styles.offToggle, { [styles.onToggle]: toggle })}>
              {AD_STATE_GROUP.map((item) => (
                <AdvertiseStateToggle key={`ToggleKey__${item.name}`} item={item} onClick={handleAdStateClick} />
              ))}
            </ul>
          </div>

          <button type='button' className={styles.createButton}>
            광고 만들기
          </button>
        </div>

        <div className={styles.itemGrid}>
          {adListData.map((item) => (
            <AdvertiseManageItem key={item.id} advertiseItem={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvertiseManageList
