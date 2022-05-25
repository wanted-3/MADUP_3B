import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { MouseEvent, useMemo, useState } from 'react'
import { ChangeAdListData, selectadListData, selectedState } from 'states/adListData'
import cx from 'classnames'
import AdItem from './AdItem'
import styles from './adList.module.scss'

const AD_STATE_GROUP = [
  { name: '전체 광고', state: 'all' },
  { name: '진행 광고', state: 'active' },
  { name: '중단 광고', state: 'ended' },
]

const AdList = () => {
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
    let name

    if (adListState === 'all') name = '전체 광고'
    if (adListState === 'active') name = '진행 광고'
    if (adListState === 'ended') name = '중단 광고'

    return name
  }, [adListState])

  return (
    <div className={styles.containerWrapper}>
      <h1 className={styles.title}>광고관리</h1>

      <div className={styles.itemWrapper}>
        <div className={styles.itemTop}>
          <div className={styles.toggleButton}>
            <button type='button' className={styles.selectedToggle} onClick={handleToggle}>
              {adListStateName}
            </button>

            <ul className={cx(styles.offToggle, { [styles.onToggle]: toggle })}>
              {AD_STATE_GROUP.map((item) => (
                <li key={item.name} className={styles.toggleItem}>
                  <button type='button' value={item.state} onClick={handleAdStateClick}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button type='button' className={styles.createButton}>
            광고 만들기
          </button>
        </div>

        <div className={styles.itemGrid}>
          {adListData.map((ad) => (
            <AdItem key={ad.id} ad={ad} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdList
