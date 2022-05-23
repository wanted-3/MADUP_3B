import AdData from './AdData'
import styles from './totalAdData.module.scss'

import { useState, ChangeEvent } from 'react'
import { useAppSelector } from 'hooks/useAppSelector'

import { trendDataSum, trendData } from 'states/dailyTrendData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getTrendDataApi } from 'services/temp'
import dayjs from 'dayjs'

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
  const [selectOptions, setSelectOptions] = useState<string[]>([])
  const [isDisable, setIsDisable] = useState(false)
  const trendDataResult = useAppSelector(trendData)
  const dispatch = useAppDispatch()

  const handleSelectOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.currentTarget
    if (selectOptions.includes(selected.value)) {
      console.log()
    }
    setSelectOptions((prev) => [...prev, e.currentTarget.value])
  }

  const handleTest = () => {
    const startD = dayjs('2022-02-05')
    const endD = dayjs('2022-02-06')
    const tstartDate = startD.subtract(endD.diff(startD, 'day') + 1, 'day').format('YYYY-MM-DD')
    const tendDate = endD.subtract(endD.diff(startD, 'day') + 1, 'day').format('YYYY-MM-DD')
    console.log(startD, endD, tstartDate, tendDate)

    getTrendDataApi().then((res) => {
      // const dailyMap = new Map(res.data.report.daily.map((day) => [day.date, day]))
      dispatch(
        trendDataSum({
          data: res.data,
          startDate: startD.format('YYYY-MM-DD'),
          endDate: endD.format('YYYY-MM-DD'),
          prevStart: tstartDate,
          prevEnd: tendDate,
        })
      )
    })
  }

  return (
    <section className={styles.totalAdData}>
      <h2 className={styles.title}>통합광고현황</h2>
      <div className={styles.chartWrapper}>
        <button type='button' onClick={handleTest}>
          get data
        </button>
        <div className={styles.chartDescription}>
          <AdData title='ROAS' data={trendDataResult.roas} result={trendDataResult.tRoas} />
          <AdData title='광고비' data={trendDataResult.cost} result={trendDataResult.tCost} />
          <AdData title='노출수' data={trendDataResult.imp} result={trendDataResult.tImp} />
          <AdData title='클릭수' data={trendDataResult.click} result={trendDataResult.tClick} />
          <AdData title='전환수' data={trendDataResult.conv} result={trendDataResult.tConv} />
          <AdData title='매출' data={trendDataResult.convValue} result={trendDataResult.tConvValue} />
        </div>
        <div className={styles.chartOptionSelectors}>
          <select name='option1' className={styles.optionSelector1} onChange={handleSelectOption}>
            {titles
              .filter((title) => !selectOptions.includes(title))
              .map((v, idx) => {
                const key = `${v}-data${idx}`
                return (
                  <option key={key} value={v}>
                    {v}
                  </option>
                )
              })}
          </select>
          <select name='option2' className={styles.optionSelector2} onChange={handleSelectOption}>
            {titles
              .filter((title) => !selectOptions.includes(title))
              .map((v, idx) => {
                const key = `${v}-data${idx}`
                return (
                  <option key={key} value={v}>
                    {v}
                  </option>
                )
              })}
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
