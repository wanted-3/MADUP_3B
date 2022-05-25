import styles from './mediaData.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectadMediaData, test } from 'states/mediaData'
import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryAxis, VictoryTooltip } from 'victory'
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

  const facebookRatio = {
    costRatio: (temp1.facebook.cost / temp1.all.cost) * 100 || 0,
    convValueRatio: (temp1.facebook.convValue / temp1.all.convValue) * 100 || 0,
    impRatio: (temp1.facebook.imp / temp1.all.imp) * 100 || 0,
    clickRatio: (temp1.facebook.click / temp1.all.click) * 100 || 0,
    cvrRatio: (temp1.facebook.cvr / temp1.all.cvr) * 100 || 0,
  }

  const googleRatio = {
    costRatio: (temp1.google.cost / temp1.all.cost) * 100 || 0,
    convValueRatio: (temp1.google.convValue / temp1.all.convValue) * 100 || 0,
    impRatio: (temp1.google.imp / temp1.all.imp) * 100 || 0,
    clickRatio: (temp1.google.click / temp1.all.click) * 100 || 0,
    cvrRatio: (temp1.google.cvr / temp1.all.cvr) * 100 || 0,
  }

  const naverRatio = {
    costRatio: (temp1.naver.cost / temp1.all.cost) * 100 || 0,
    convValueRatio: (temp1.naver.convValue / temp1.all.convValue) * 100 || 0,
    impRatio: (temp1.naver.imp / temp1.all.imp) * 100 || 0,
    clickRatio: (temp1.naver.click / temp1.all.click) * 100 || 0,
    cvrRatio: (temp1.naver.cvr / temp1.all.cvr) * 100 || 0,
  }

  const kakaoRatio = {
    costRatio: (temp1.kakao.cost / temp1.all.cost) * 100 || 0,
    convValueRatio: (temp1.kakao.convValue / temp1.all.convValue) * 100 || 0,
    impRatio: (temp1.kakao.imp / temp1.all.imp) * 100 || 0,
    clickRatio: (temp1.kakao.click / temp1.all.click) * 100 || 0,
    cvrRatio: (temp1.kakao.cvr / temp1.all.cvr) * 100 || 0,
  }

  const facebookData = [
    { x: '광고비', y: facebookRatio.costRatio, label: facebookRatio.costRatio },
    { x: '매출', y: facebookRatio.convValueRatio, label: facebookRatio.convValueRatio },
    { x: '노출수', y: facebookRatio.impRatio, label: facebookRatio.impRatio },
    { x: '클릭수', y: facebookRatio.clickRatio, label: facebookRatio.clickRatio },
    { x: '전환수', y: facebookRatio.cvrRatio, label: facebookRatio.cvrRatio },
  ]

  const googleData = [
    { x: '광고비', y: googleRatio.costRatio, label: googleRatio.costRatio },
    { x: '매출', y: googleRatio.convValueRatio, label: googleRatio.convValueRatio },
    { x: '노출수', y: googleRatio.impRatio, label: googleRatio.impRatio },
    { x: '클릭수', y: googleRatio.clickRatio, label: googleRatio.clickRatio },
    { x: '전환수', y: googleRatio.cvrRatio, label: googleRatio.cvrRatio },
  ]
  const naverData = [
    { x: '광고비', y: naverRatio.costRatio, label: naverRatio.costRatio },
    { x: '매출', y: naverRatio.convValueRatio, label: naverRatio.convValueRatio },
    { x: '노출수', y: naverRatio.impRatio, label: naverRatio.impRatio },
    { x: '클릭수', y: naverRatio.clickRatio, label: naverRatio.clickRatio },
    { x: '전환수', y: naverRatio.cvrRatio, label: naverRatio.cvrRatio },
  ]
  const kakaoData = [
    { x: '광고비', y: kakaoRatio.costRatio, label: kakaoRatio.costRatio },
    { x: '매출', y: kakaoRatio.convValueRatio, label: kakaoRatio.convValueRatio },
    { x: '노출수', y: kakaoRatio.impRatio, label: kakaoRatio.impRatio },
    { x: '클릭수', y: kakaoRatio.clickRatio, label: kakaoRatio.clickRatio },
    { x: '전환수', y: kakaoRatio.cvrRatio, label: kakaoRatio.cvrRatio },
  ]

  const handleTemp = () => {
    getMediaDataApi().then((res) => {
      dispatch(test({ data: res.data, startDate: '2022-02-01', endDate: '2022-02-02' }))
    })
  }

  return (
    <div className={styles.mediaData}>
      <h1 className={styles.title}>매체현황</h1>
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
              <MediaSumData title='페이스북' {...temp1.facebook} />
              <MediaSumData title='구글' {...temp1.google} />
              <MediaSumData title='네이버' {...temp1.naver} />
              <MediaSumData title='카카오' {...temp1.kakao} />
              <MediaSumData title='합계' {...temp1.all} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MediaData
