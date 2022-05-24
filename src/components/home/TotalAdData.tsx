import store from 'store'
import AdData from './AdData'
import styles from './totalAdData.module.scss'

import { useState } from 'react'
import { useAppSelector } from 'hooks/useAppSelector'
import { trendData } from 'states/dailyTrendData'
import SelectButton from './SelectButton'
import Dropdown from 'components/dropdown'

// 매출 = ROAS / 100 * 광고비
const titles = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출']

const dataStructure = [
  { value: 0, category: 'ROAS' },
  { value: 0, category: '광고비' },
  { value: 0, category: '노출 수' },
  { value: 0, category: '클릭 수' },
  { value: 0, category: '전환 수' },
  { value: 0, category: '매출' },
]

// {
//   "imp": 51479, // 노출 수
//   "click": 559, // 클릭 수
//   "cost": 371790, // 광고비
//   "conv": 37, // 전환 수
//   "convValue": 3668610,
//   "ctr": 1.09, // 클릭률
//   "cvr": 6.62, // 전환율
//   "cpc": 665.1, // click per click
//   "cpa": 10048.38, // click per action
//   "roas": 986.74, // 광고 지출 대비 수익률
//   "date": "2022-02-01"
// },

const TotalAdData = () => {
  const trendDataResult = useAppSelector(trendData)
  const [firstOption, setFirstOption] = useState(store.get('firstOption') || 'ROAS')
  const [secondOption, setSecondOption] = useState(store.get('secondOption') || '광고비')

  return (
    <section className={styles.totalAdData}>
      <h2 className={styles.title}>통합광고현황</h2>
      <div className={styles.chartWrapper}>
        <div className={styles.chartDescription}>
          {titles.map((v, idx) => {
            const key = `${v}-${idx}`
            return <AdData key={key} title={v} data={v} result={v} />
          })}
        </div>
        <div className={styles.chartOptionSelectors}>
          <div className={styles.optionSelector}>
            <SelectButton
              defaultSelect={firstOption}
              firstOption={firstOption}
              secondOption={secondOption}
              setFirstOption={setFirstOption}
            />
            <SelectButton
              defaultSelect={secondOption}
              firstOption={firstOption}
              secondOption={secondOption}
              setSecondOption={setSecondOption}
            />
          </div>
          <div className={styles.termSelector}>
            <Dropdown list={['주간', '일별']} />
          </div>
        </div>
        <div className={styles.chart}>Chart</div>
      </div>
    </section>
  )
}

export default TotalAdData
