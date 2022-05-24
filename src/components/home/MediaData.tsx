import styles from './mediaData.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectadMediaData, test } from 'states/mediaData'
import { VictoryBar, VictoryChart, VictoryStack, VictoryPortal, VictoryLabel, VictoryTheme, VictoryAxis } from 'victory'
import { getMediaDataApi } from 'services/temp'
import MediaSumData from './MediaSumData'
import BigNumber from 'bignumber.js'

const temp = [
  {
    channel: '구글',
    cost: 12345674, // 광고비
    convValue: 123123, // 매출
    roas: 123123, // roas(광고 지출 대비 수익률)
    imp: 123124, // 노출수
    click: 123123, // 클릭 수
    ctr: 1234566, // 클릭률
    cpc: 12345678, // 클릭당비용
  },
]

// "channel": "google", //
//     "date": "2022-02-01", // 날짜
//     "imp": 50, // 광고노출
//     "click": 7, // 클릭수
//     "cost": 2098, // 비용
//     "convValue": 0, // 매출
//     "ctr": 14.0000, // 클릭률
//     "cvr": 0.0000, // 전환률
//     "cpc": 299.7143, // 클릭당 비용
//     "cpa": 0.0000, // 획득당 비용 or 행동당 비용
//     "roas": 0.0000 // 광고 지출 대비 수익률

const MediaData = () => {
  const temp1 = useAppSelector(selectadMediaData)
  const dispatch = useAppDispatch()
  const facebookRatio = [
    { costRatio: new BigNumber(temp1.facebook.cost).dividedBy(temp1.all.cost).multipliedBy(100).toNumber() },
    {
      convValueRatio: new BigNumber(temp1.facebook.convValue)
        .dividedBy(temp1.all.convValue)
        .multipliedBy(100)
        .toNumber(),
    },
    { impRatio: new BigNumber(temp1.facebook.imp).dividedBy(temp1.all.imp).multipliedBy(100).toNumber() },
    { clickRatio: new BigNumber(temp1.facebook.click).dividedBy(temp1.all.click).multipliedBy(100).toNumber() },
    { cvrRatio: new BigNumber(temp1.facebook.cvr).dividedBy(temp1.all.cvr).multipliedBy(100).toNumber() },
  ]
  const googleRatio = [
    { costRatio: new BigNumber(temp1.google.cost).dividedBy(temp1.all.cost).multipliedBy(100).toNumber() },
    {
      convValueRatio: new BigNumber(temp1.google.convValue).dividedBy(temp1.all.convValue).multipliedBy(100).toNumber(),
    },
    { impRatio: new BigNumber(temp1.google.imp).dividedBy(temp1.all.imp).multipliedBy(100).toNumber() },
    { clickRatio: new BigNumber(temp1.google.click).dividedBy(temp1.all.click).multipliedBy(100).toNumber() },
    { cvrRatio: new BigNumber(temp1.google.cvr).dividedBy(temp1.all.cvr).multipliedBy(100).toNumber() },
  ]
  const naverRatio = [
    { costRatio: new BigNumber(temp1.naver.cost).dividedBy(temp1.all.cost).multipliedBy(100).toNumber() },
    {
      convValueRatio: new BigNumber(temp1.naver.convValue).dividedBy(temp1.all.convValue).multipliedBy(100).toNumber(),
    },
    { impRatio: new BigNumber(temp1.naver.imp).dividedBy(temp1.all.imp).multipliedBy(100).toNumber() },
    { clickRatio: new BigNumber(temp1.naver.click).dividedBy(temp1.all.click).multipliedBy(100).toNumber() },
    { cvrRatio: new BigNumber(temp1.naver.cvr).dividedBy(temp1.all.cvr).multipliedBy(100).toNumber() },
  ]
  const kakaoRatio = [
    { costRatio: new BigNumber(temp1.kakao.cost).dividedBy(temp1.all.cost).multipliedBy(100).toNumber() },
    {
      convValueRatio: new BigNumber(temp1.kakao.convValue).dividedBy(temp1.all.convValue).multipliedBy(100).toNumber(),
    },
    { impRatio: new BigNumber(temp1.kakao.imp).dividedBy(temp1.all.imp).multipliedBy(100).toNumber() },
    { clickRatio: new BigNumber(temp1.kakao.click).dividedBy(temp1.all.click).multipliedBy(100).toNumber() },
    { cvrRatio: new BigNumber(temp1.kakao.cvr).dividedBy(temp1.all.cvr).multipliedBy(100).toNumber() },
  ]

  const facebookData = [
    { x: '광고비', y: facebookRatio[0].costRatio },
    { x: '매출', y: facebookRatio[1].convValueRatio },
    { x: '노출수', y: facebookRatio[2].impRatio },
    { x: '클릭수', y: facebookRatio[3].clickRatio },
    { x: '전환수', y: facebookRatio[4].cvrRatio },
  ]
  const googleData = [
    { x: '광고비', y: googleRatio[0].costRatio },
    { x: '매출', y: googleRatio[1].convValueRatio },
    { x: '노출수', y: googleRatio[2].impRatio },
    { x: '클릭수', y: googleRatio[3].clickRatio },
    { x: '전환수', y: googleRatio[4].cvrRatio },
  ]
  const naverData = [
    { x: '광고비', y: naverRatio[0].costRatio },
    { x: '매출', y: naverRatio[1].convValueRatio },
    { x: '노출수', y: naverRatio[2].impRatio },
    { x: '클릭수', y: naverRatio[3].clickRatio },
    { x: '전환수', y: naverRatio[4].cvrRatio },
  ]
  const kakaoData = [
    { x: '광고비', y: kakaoRatio[0].costRatio },
    { x: '매출', y: kakaoRatio[1].convValueRatio },
    { x: '노출수', y: kakaoRatio[2].impRatio },
    { x: '클릭수', y: kakaoRatio[3].clickRatio },
    { x: '전환수', y: kakaoRatio[4].cvrRatio },
  ]

  console.log(temp1)
  const handleTemp = () => {
    getMediaDataApi().then((res) => {
      console.log('미디어 데이터', res.data)
      dispatch(test({ data: res.data, startDate: '2022-02-01', endDate: '2022-02-02' }))
    })
  }

  return (
    <div>
      <h1>매체현황</h1>
      <button type='button' onClick={handleTemp}>
        click
      </button>
      <div className={styles.trendWrap}>
        <div className={styles.trendChart}>
          <VictoryChart domainPadding={40} height={500} width={900} theme={VictoryTheme.material}>
            <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']} />
            <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} />
            <VictoryStack
              colorScale={['#4FADF7', '#85DA47', '#AC8AF8', '#ff7f50']}
              style={{
                data: { width: 30 },
                labels: { padding: -20 },
              }}
              labelComponent={
                <VictoryPortal>
                  <VictoryLabel />
                </VictoryPortal>
              }
            >
              <VictoryBar data={facebookData} />
              <VictoryBar data={googleData} />
              <VictoryBar data={naverData} />
              <VictoryBar data={kakaoData} />
            </VictoryStack>
          </VictoryChart>
        </div>
        <div className={styles.trendDetailWrap}>
          <div className={styles.trendReportList}>
            <span className={styles.chartTitle}>광고비</span>
            <span>매출</span>
            <span>ROAS</span>
            <span>노출수</span>
            <span>클릭 수</span>
            <span>클릭률 (CTR)</span>
            <span>클릭당비용 (CPC)</span>
          </div>
          <div>
            <MediaSumData title='페이스북' {...temp1.facebook} />
            <MediaSumData title='구글' {...temp1.google} />
            <MediaSumData title='네이버' {...temp1.naver} />
            <MediaSumData title='카카오' {...temp1.kakao} />
            <div className={styles.total}>
              <MediaSumData title='합계' {...temp1.all} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaData
