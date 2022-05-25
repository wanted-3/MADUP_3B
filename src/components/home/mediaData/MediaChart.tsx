import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryAxis, VictoryTooltip } from 'victory'
import { selectadMediaData, UseNumValue } from 'states/mediaData'
import { useAppSelector } from 'hooks/useAppSelector'

const mediaChartDataFunc = (allData: UseNumValue, snsData: UseNumValue) => {
  const ratioData = {
    costRatio: (snsData.cost / allData.cost) * 100 || 0,
    convValueRatio: (snsData.convValue / allData.convValue) * 100 || 0,
    impRatio: (snsData.imp / allData.imp) * 100 || 0,
    clickRatio: (snsData.click / allData.click) * 100 || 0,
    cvrRatio: (snsData.cvr / allData.cvr) * 100 || 0,
  }

  return [
    { x: '광고비', y: ratioData.costRatio, label: snsData.cost },
    { x: '매출', y: ratioData.convValueRatio, label: snsData.convValue },
    { x: '노출수', y: ratioData.impRatio, label: snsData.imp },
    { x: '클릭수', y: ratioData.clickRatio, label: snsData.click },
    { x: '전환수', y: ratioData.cvrRatio, label: snsData.cvr },
  ]
}

const MediaChart = () => {
  const mediaData = useAppSelector(selectadMediaData)

  const facebookData = mediaChartDataFunc(mediaData.all, mediaData.facebook)
  const googleData = mediaChartDataFunc(mediaData.all, mediaData.google)
  const naverData = mediaChartDataFunc(mediaData.all, mediaData.naver)
  const kakaoData = mediaChartDataFunc(mediaData.all, mediaData.kakao)

  return (
    <div>
      <VictoryChart domainPadding={40} height={500} width={900} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} />
        <VictoryStack
          colorScale={['#7FA2FF', '#AC8AF8', '#85DA47', '#F9F871']}
          style={{
            data: { width: 30 },
          }}
          labelComponent={<VictoryTooltip cornerRadius={5} flyoutStyle={{ fill: '#3A474E' }} />}
        >
          <VictoryBar data={facebookData} style={{ labels: { fill: 'white' } }} />
          <VictoryBar data={googleData} style={{ labels: { fill: 'white' } }} />
          <VictoryBar data={naverData} style={{ labels: { fill: 'white' } }} />
          <VictoryBar data={kakaoData} style={{ labels: { fill: 'white' } }} cornerRadius={{ top: 10 }} />
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default MediaChart
