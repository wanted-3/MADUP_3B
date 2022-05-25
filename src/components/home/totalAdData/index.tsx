import { useMemo } from 'react'

import { selectedOption, setFirstOption, setSecondOption } from 'states/selectedOptions'
import { IData, weeklyData } from 'states/weeklyTrendData'
import { useAppSelector } from 'hooks/useAppSelector'
import { trendDataSet } from 'states/trendData'

import WeeklyDataChart from './WeeklyDataChart'
import SelectButton from './SelectButton'
import AdData from './AdData'

import styles from './totalAdData.module.scss'

interface ISelectedWeeklyData {
  [key: string]: IData
}

interface IUnit {
  [key: string]: string
}

const TotalAdData = () => {
  const trendDataResult = useAppSelector(trendDataSet)
  const weeklyDataResult = useAppSelector(weeklyData)
  const selectedOptions = useAppSelector(selectedOption)

  const trendSumData = [
    { title: 'ROAS', data: trendDataResult.roas, result: trendDataResult.tRoas },
    { title: '광고비', data: trendDataResult.cost, result: trendDataResult.tCost },
    { title: '노출수', data: trendDataResult.imp, result: trendDataResult.tImp },
    { title: '클릭수', data: trendDataResult.click, result: trendDataResult.tClick },
    { title: '전환수', data: trendDataResult.conv, result: trendDataResult.tConv },
    { title: '매출', data: trendDataResult.convValue, result: trendDataResult.tConvValue },
  ]

  const chartUnit = useMemo(() => {
    const unit: IUnit = {
      ROAS: '%',
      광고비: '만 원',
      노출수: '만 회',
      클릭수: '천 회',
      전환수: '회',
      매출: '만 회',
    }

    return unit[selectedOptions.firstOption]
  }, [selectedOptions])

  const firstOptionData = useMemo(() => {
    const selectedWeeklyData: ISelectedWeeklyData = {
      ROAS: weeklyDataResult.ROAS,
      광고비: weeklyDataResult.COST,
      클릭수: weeklyDataResult.CLICK,
      전환수: weeklyDataResult.CONV,
      노출수: weeklyDataResult.IMP,
      매출: weeklyDataResult.CONVVALUE,
    }

    return selectedWeeklyData[selectedOptions.firstOption]
  }, [selectedOptions, weeklyDataResult])

  const secondOptionData = useMemo(() => {
    const selectedWeeklyData: ISelectedWeeklyData = {
      ROAS: weeklyDataResult.ROAS,
      광고비: weeklyDataResult.COST,
      클릭수: weeklyDataResult.CLICK,
      전환수: weeklyDataResult.CONV,
      노출수: weeklyDataResult.IMP,
      매출: weeklyDataResult.CONVVALUE,
      선택안함: { value: [], color: '#C7C7C7' },
    }

    return selectedWeeklyData[selectedOptions.secondOption]
  }, [selectedOptions, weeklyDataResult])

  return (
    <section className={styles.totalAdData}>
      <h2 className={styles.title}>통합광고현황</h2>
      <div className={styles.chartWrapper}>
        <div className={styles.chartDescription}>
          {trendSumData.map((item) => (
            <AdData key={`AdDataKey__${item.title}`} title={item.title} data={item.data} result={item.result} />
          ))}
        </div>

        <div className={styles.chartOptionSelectors}>
          <div className={styles.optionSelectors}>
            <SelectButton defaultSelect={selectedOptions.firstOption} setSelectOption={setFirstOption} />
            <SelectButton
              defaultSelect={selectedOptions.secondOption}
              setSelectOption={setSecondOption}
              isSecondOption
            />
          </div>
          <select className={styles.termSelector}>
            <option>주간</option>
            <option>일별</option>
          </select>
        </div>
        <div className={styles.chart}>
          <WeeklyDataChart firstOption={firstOptionData} secondOption={secondOptionData} unit={chartUnit} />
        </div>
      </div>
    </section>
  )
}

export default TotalAdData
