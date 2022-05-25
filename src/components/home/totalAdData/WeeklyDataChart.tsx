import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryScatter,
} from 'victory'
import BigNumber from 'bignumber.js'
import { useMemo } from 'react'
import dayjs from 'dayjs'

import type { IData } from 'states/weeklyTrendData'

import styles from './weeklyDataChart.module.scss'

interface Props {
  firstOption: IData
  secondOption: IData
  firstUnit: string
  secondUnit: string
}

const WeeklyDataChart = ({ firstOption, secondOption, firstUnit, secondUnit }: Props) => {
  const chartData = secondOption.value.length === 0 ? [firstOption.value] : [firstOption.value, secondOption.value]

  const lineColors = [firstOption.color, secondOption.color]
  const maximumY = chartData.map((dataset) => Math.max(...dataset.map((d) => d.y)))
  const dateTick = chartData[0].map((d) => d.x)
  const xOffsets = [50, 650]
  const tickPadding = [-20, 0]
  const anchors = ['start', 'end']

  const ceilDataList = useMemo(() => {
    const list: number[] = []
    const ceilData = maximumY.map((item) => new BigNumber(item).precision(1, BigNumber.ROUND_UP).c)

    ceilData.map((item) => {
      if (!item) return null

      return list.push(item[0])
    })
    return list
  }, [maximumY])

  return (
    <div className={styles.chartWrapper}>
      <VictoryChart theme={VictoryTheme.material} width={700} height={400} domain={{ y: [0, 1] }}>
        <VictoryAxis
          style={{ grid: { strokeWidth: 0 } }}
          tickValues={dateTick}
          tickFormat={(t) => dayjs(t).format('MM월 DD일')}
        />
        {chartData.map((d, i) => {
          const key = `chartAxis__${i}`
          return (
            <VictoryAxis
              dependentAxis
              key={key}
              offsetX={xOffsets[i]}
              style={{
                axis: { stroke: lineColors[i] },
                ticks: { padding: tickPadding[i] },
                tickLabels: { fill: lineColors[i], textAnchor: anchors[i] },
                grid: { stroke: '#dddddd', strokeWidth: 1 },
              }}
              tickFormat={(t) => {
                return i === 0
                  ? `${Math.round(t * ceilDataList[i])}${firstUnit}`
                  : `${Math.round(t * ceilDataList[i])}${secondUnit}`
              }}
            />
          )
        })}
        {chartData.map((d, i) => {
          const key = `chartData__${i}`
          return (
            <VictoryGroup
              key={key}
              data={d}
              color={lineColors[i]}
              style={{ data: { stroke: lineColors[i] }, labels: { fill: '#FFFFFF' } }}
              y={(datum) => datum.y / ceilDataList[i]}
              labels={({ datum }) => datum.y}
              labelComponent={<VictoryTooltip cornerRadius={5} flyoutStyle={{ fill: '#3A474E' }} />}
            >
              <VictoryLine />
              <VictoryScatter />
            </VictoryGroup>
          )
        })}
      </VictoryChart>
    </div>
  )
}

export default WeeklyDataChart
