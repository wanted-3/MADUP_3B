import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { MouseEvent, useState } from 'react'
import { adListDataState, returnState, selectadListData } from 'states/adListData'
import AdItem from './AdItem'
import styles from './adList.module.scss'

const AD_STATE_GROUP = [
  { name: '전체 광고', state: 'all' },
  { name: '진행 광고', state: 'active' },
  { name: '중단 광고', state: 'ended' },
]

const AdList = () => {
  const [adState, setAdState] = useState('전체 광고')

  const dispatch = useAppDispatch()
  const adListData = useAppSelector(selectadListData)

  const handleAdStateClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAdState(e.currentTarget.name)

    e.currentTarget.value === 'all' ? dispatch(returnState()) : dispatch(adListDataState(e.currentTarget.value))
  }

  return (
    <div className={styles.containerWrapper}>
      <h1 className={styles.title}>광고관리</h1>

      <div className={styles.itemWrapper}>
        <div className={styles.itemTop}>
          <button type='button' className={styles.adStateButton}>
            {adState}
          </button>

          {AD_STATE_GROUP.map((item) => (
            <button
              type='button'
              key={`adState-${item.name}`}
              name={item.name}
              value={item.state}
              onClick={handleAdStateClick}
            >
              {item.name}
            </button>
          ))}

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
