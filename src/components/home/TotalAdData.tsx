import AdData from './AdData'
import styles from './totalAdData.module.scss'

import TREND_DATA from '../../trend-data.json'

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
          <select name='option1' className={styles.optionSelector1}>
            <option value='ROAS'>ROAS</option>
            <option value='광고비'>광고비</option>
            <option value='노출수'>노출수</option>
            <option value='클릭수'>클릭수</option>
            <option value='전환수'>전환수</option>
            <option value='매출'>매출</option>
          </select>
          <select name='option2' className={styles.optionSelector2}>
            <option value='ROAS'>ROAS</option>
            <option value='광고비'>광고비</option>
            <option value='노출수'>노출수</option>
            <option value='클릭수'>클릭수</option>
            <option value='전환수'>전환수</option>
            <option value='매출'>매출</option>
          </select>
          <select name='option3' className={styles.termSelector}>
            <option value='주간'>주간</option>
            <option value='일별'>일별</option>
          </select>
        </div>
        <div className={styles.chart}>Chart</div>
      </div>
    </section>
  )
}

export default TotalAdData
