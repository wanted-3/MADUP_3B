import AdData from './AdData'
import styles from './totalAdData.module.scss'

import { useAppSelector } from 'hooks/useAppSelector'
import SelectButton from './SelectButton'

import { trendData } from 'states/dailyTrendData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { weeklyData } from 'states/weeklyTrendData'
import TrendDataChart from './TrendDataChart'
import { selectedOption, setFirstOption, setSecondOption } from 'states/selectedOptions'
import { useMemo } from 'react'

const TotalAdData = () => {
  const trendDataResult = useAppSelector(trendData)
  const weeklyDataResult = useAppSelector(weeklyData)
  const selectedOptions = useAppSelector(selectedOption)

  const dispatch = useAppDispatch()

  const data = useMemo(() => {
    if (selectedOptions.firstOption === 'ROAS') {
      return weeklyDataResult.ROAS
    }
    if (selectedOptions.firstOption === '광고비') {
      return weeklyDataResult.COST
    }
    if (selectedOptions.firstOption === '클릭수') {
      return weeklyDataResult.CLICK
    }
    if (selectedOptions.firstOption === '전환수') {
      return weeklyDataResult.CONV
    }
    if (selectedOptions.firstOption === '노출수') {
      return weeklyDataResult.IMP
    }
    if (selectedOptions.firstOption === '매출') {
      return weeklyDataResult.CONVVALUE
    }
    return weeklyDataResult.CONVVALUE
  }, [selectedOptions, weeklyDataResult])

  const secondData = useMemo(() => {
    if (selectedOptions.secondOption === 'ROAS') {
      return weeklyDataResult.ROAS
    }
    if (selectedOptions.secondOption === '광고비') {
      return weeklyDataResult.COST
    }
    if (selectedOptions.secondOption === '클릭수') {
      return weeklyDataResult.CLICK
    }
    if (selectedOptions.secondOption === '전환수') {
      return weeklyDataResult.CONV
    }
    if (selectedOptions.secondOption === '노출수') {
      return weeklyDataResult.IMP
    }
    if (selectedOptions.secondOption === '매출') {
      return weeklyDataResult.CONVVALUE
    }

    if (selectedOptions.secondOption === '선택안함') {
      return { value: [], color: 'red' }
    }
    return weeklyDataResult.CONVVALUE
  }, [selectedOptions, weeklyDataResult])

  return (
    <section className={styles.totalAdData}>
      <h2 className={styles.title}>통합광고현황</h2>
      <div className={styles.chartWrapper}>
        <div className={styles.chartDescription}>
          <AdData title='ROAS' data={trendDataResult.roas} result={trendDataResult.tRoas} />
          <AdData title='광고비' data={trendDataResult.cost} result={trendDataResult.tCost} />
          <AdData title='노출수' data={trendDataResult.imp} result={trendDataResult.tImp} />
          <AdData title='클릭수' data={trendDataResult.click} result={trendDataResult.tClick} />
          <AdData title='전환수' data={trendDataResult.conv} result={trendDataResult.tConv} />
          <AdData title='매출' data={trendDataResult.convValue} result={trendDataResult.tConvValue} />
        </div>
        <div className={styles.chartOptionSelectors}>
          <div className={styles.optionSelectors}>
            <SelectButton defaultSelect={selectedOptions.firstOption} setSelectOption={setFirstOption} />
            <SelectButton defaultSelect={selectedOptions.secondOption} setSelectOption={setSecondOption} temp />
          </div>
          <select className={styles.termSelector}>
            <option>주간</option>
            <option>일별</option>
          </select>
        </div>

        <div className={styles.chart}>
          <TrendDataChart chartData={data} temp={secondData} />
        </div>
      </div>
    </section>
  )
}

export default TotalAdData
