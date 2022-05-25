import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryScatter,
} from 'victory'
import dayjs from 'dayjs'
import { IData } from 'states/weeklyTrendData'

interface Props {
  chartData: IData
  temp: IData
}

// const axisDataFormat = (props: number) => {
//   if(props < 100) {
//     return [20,40,60,80,100]
//   }
//   if(props < 1000) {
//     return [200,400,600,800,1000]
//   }
//   if(props < 10000) {
//     return ['2천',]
//   }
//   if(props < 10000)
//   if(props < 100000)
// }

const TrendDataChart = ({ chartData, temp }: Props) => {
  let test
  if (temp.value.length === 0) {
    test = [chartData.value]
  } else {
    test = [chartData.value, temp.value]
  }
  // const test = [chartData.value, temp.value]
  const lineColors = [chartData.color, temp.color]
  const maxima = test.map((dataset) => Math.max(...dataset.map((d) => d.y)))
  const dateTick = test[0].map((d) => d.x)
  const xOffsets = [50, 750]
  const tickPadding = [0, -20]
  const anchors = ['end', 'start']

  return (
    <VictoryChart
      containerComponent={<VictoryVoronoiContainer />}
      theme={VictoryTheme.material}
      width={800}
      height={400}
      domain={{ y: [0, 1] }}
    >
      <VictoryAxis
        style={{ grid: { strokeWidth: 0 } }}
        tickValues={dateTick}
        tickFormat={(t) => dayjs(t).format('MM월 DD일')}
      />
      {test.map((d, i) => {
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
              grid: { stroke: 'grey', strokeWidth: 1 },
            }}
            // Use normalized tickValues (0 - 1)
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            // Re-scale ticks by multiplying by correct maxima
            tickFormat={(t) => Math.round(t * maxima[i])}
          />
        )
      })}

      {/* 축에 단위, 그래프 색상 옵션하고 연결하기 */}
      {test.map((d, i) => {
        const key = `chartData__${i}`
        return (
          <VictoryGroup
            key={key}
            data={d}
            color={lineColors[i]}
            style={{ data: { stroke: lineColors[i] } }}
            // normalize data
            y={(datum) => datum.y / maxima[i]}
          >
            <VictoryLine />
            <VictoryScatter
              labels={({ datum }) => datum.y}
              style={{ labels: { fill: 'white' } }}
              labelComponent={<VictoryTooltip cornerRadius={5} flyoutStyle={{ fill: '#3A474E' }} />}
            />
          </VictoryGroup>
        )
      })}
    </VictoryChart>
  )
}

export default TrendDataChart
