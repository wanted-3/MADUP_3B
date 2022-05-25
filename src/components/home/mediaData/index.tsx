import styles from './mediaData.module.scss'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectadMediaData, UseNumValue } from 'states/mediaData'
import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryAxis, VictoryTooltip } from 'victory'
import MediaSumData from './MediaSumData'
import { CircleIcon } from 'assets/svgs'

const SNS_COLORS = [
  { name: '페이스북', color: '#7FA2FF' },
  { name: '구글', color: '#AC8AF8' },
  { name: '네이버', color: '#85DA47' },
  { name: '카카오', color: '#F9F871' },
]

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

const MediaData = () => {
  const mediaData = useAppSelector(selectadMediaData)

  const facebookData = mediaChartDataFunc(mediaData.all, mediaData.facebook)
  const googleData = mediaChartDataFunc(mediaData.all, mediaData.google)
  const naverData = mediaChartDataFunc(mediaData.all, mediaData.naver)
  const kakaoData = mediaChartDataFunc(mediaData.all, mediaData.kakao)

  return (
    <div className={styles.mediaData}>
      <h1 className={styles.title}>매체현황</h1>
      <div className={styles.trendWrap}>
        <div className={styles.trendChart}>
          <VictoryChart domainPadding={40} height={500} width={900} theme={VictoryTheme.material}>
            <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']} />
            <VictoryAxis dependentAxis tickFormat={(x) => (x < 1 ? `${0}%` : `${x}%`)} />
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
              <VictoryBar
                data={kakaoData}
                style={{ labels: { fill: 'white' } }}
                cornerRadius={{ topLeft: 10, topRight: 10 }}
              />
            </VictoryStack>
          </VictoryChart>
        </div>

        <ul className={styles.snsListWrap}>
          {SNS_COLORS.map((item) => (
            <li key={`snsList-${item.name}`} data-value={item.name} className={styles.snsList} role='presentation'>
              <CircleIcon style={{ fill: item.color }} />
              <span className={styles.title}>{item.name}</span>
            </li>
          ))}
        </ul>
        <div className={styles.trendDetailWrap}>
          <table>
            <thead>
              <tr className={styles.trendIndex}>
                <th>.</th>
                <th>광고비</th>
                <th>매출</th>
                <th>ROAS</th>
                <th>노출수</th>
                <th>클릭 수</th>
                <th>클릭률 (CTR)</th>
                <th>클릭당비용 (CPC)</th>
              </tr>
            </thead>
            <tbody>
              <MediaSumData title='페이스북' {...mediaData.facebook} />
              <MediaSumData title='구글' {...mediaData.google} />
              <MediaSumData title='네이버' {...mediaData.naver} />
              <MediaSumData title='카카오' {...mediaData.kakao} />
              <MediaSumData title='합계' {...mediaData.all} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MediaData
