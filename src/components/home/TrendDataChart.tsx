import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory'
import dayjs from 'dayjs'
import { IDate } from 'states/weeklyTrendData'

interface Props {
  chartData: IDate[]
  temp: IDate[]
}

const TrendDataChart = ({ chartData, temp }: Props) => {
  const test = [chartData, temp]
  const maxima = test.map((dataset) => Math.max(...dataset.map((d) => d.y)))
  const xOffsets = [50, 350, 50]
  const tickPadding = [0, 0, -15]
  const anchors = ['end', 'end', 'start']
  const colors = ['black', 'red', 'blue']

  return (
    <VictoryChart theme={VictoryTheme.material} width={400} height={400} domain={{ y: [0, 1] }}>
      <VictoryAxis />
      {test.map((d, i) => (
        <VictoryAxis
          dependentAxis
          key={i}
          offsetX={xOffsets[i]}
          style={{
            axis: { stroke: colors[i] },
            ticks: { padding: tickPadding[i] },
            tickLabels: { fill: colors[i], textAnchor: anchors[i] },
          }}
          // Use normalized tickValues (0 - 1)
          tickValues={[0.25, 0.5, 0.75, 1]}
          // Re-scale ticks by multiplying by correct maxima
          tickFormat={(t) => t * maxima[i]}
        />
      ))}
      {test.map((d, i) => (
        <VictoryLine
          key={i}
          data={d}
          style={{ data: { stroke: colors[i] } }}
          // normalize data
          y={(datum) => datum.y / maxima[i]}
        />
      ))}
    </VictoryChart>
  )
}

export default TrendDataChart
