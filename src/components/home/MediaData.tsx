import styles from './mediaData.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectadMediaData, test } from 'states/mediaData'
import { VictoryBar, VictoryChart, VictoryStack, VictoryPortal, VictoryLabel, VictoryTheme, VictoryAxis } from 'victory'
import { getMediaDataApi } from 'services/temp'
import MediaSumData from './MediaSumData'
import { CircleIcon } from 'assets/svgs'

const snsColors = [
  ['페이스북', '#7FA2FF'],
  ['구글', '#AC8AF8'],
  ['네이버', '#85DA47'],
  ['카카오', '#F9F871'],
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
    { costRatio: (temp1.facebook.cost / temp1.all.cost) * 100 },
    {
      convValueRatio: (temp1.facebook.convValue / temp1.all.convValue) * 100,
    },
    { impRatio: (temp1.facebook.imp / temp1.all.imp) * 100 },
    { clickRatio: (temp1.facebook.click / temp1.all.click) * 100 },
    { cvrRatio: (temp1.facebook.cvr / temp1.all.cvr) * 100 },
  ]
  const googleRatio = [
    { costRatio: (temp1.google.cost / temp1.all.cost) * 100 },
    {
      convValueRatio: (temp1.google.convValue / temp1.all.convValue) * 100,
    },
    { impRatio: (temp1.google.imp / temp1.all.imp) * 100 },
    { clickRatio: (temp1.google.click / temp1.all.click) * 100 },
    { cvrRatio: (temp1.google.cvr / temp1.all.cvr) * 100 },
  ]
  const naverRatio = [
    { costRatio: (temp1.naver.cost / temp1.all.cost) * 100 },
    {
      convValueRatio: (temp1.naver.convValue / temp1.all.convValue) * 100,
    },
    { impRatio: (temp1.naver.imp / temp1.all.imp) * 100 },
    { clickRatio: (temp1.naver.click / temp1.all.click) * 100 },
    { cvrRatio: (temp1.naver.cvr / temp1.all.cvr) * 100 },
  ]
  const kakaoRatio = [
    { costRatio: (temp1.kakao.cost / temp1.all.cost) * 100 },
    {
      convValueRatio: (temp1.kakao.convValue / temp1.all.convValue) * 100,
    },
    { impRatio: (temp1.kakao.imp / temp1.all.imp) * 100 },
    { clickRatio: (temp1.kakao.click / temp1.all.click) * 100 },
    { cvrRatio: (temp1.kakao.cvr / temp1.all.cvr) * 100 },
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
              colorScale={['#7FA2FF', '#AC8AF8', '#85DA47', '#F9F871']}
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
        <ul className={styles.snsListWrap}>
          {snsColors.map((c, idx) => {
            const key = `snsList__${idx}`
            return (
              <li key={key} data-value={c[0]} className={styles.snsList} role='presentation'>
                <CircleIcon style={{ fill: c[1] }} />
                <span className={styles.title}>{c[0]}</span>
              </li>
            )
          })}
        </ul>
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
