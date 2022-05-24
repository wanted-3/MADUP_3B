import styles from './mediaData.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectadMediaData, test } from 'states/mediaData'
import { VictoryBar, VictoryChart, VictoryStack, VictoryPortal, VictoryLabel, VictoryAxis } from 'victory'
import { getMediaDataApi } from 'services/temp'
import MediaSumData from './MediaSumData'

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

  const handleTemp = () => {
    getMediaDataApi().then((res) => {
      console.log('미디어 데이터', res.data)
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
          <VictoryChart domainPadding={30}>
            <VictoryStack
              colorScale={['#4FADF7', '#85DA47', '#AC8AF8']}
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
              <VictoryBar
                data={[
                  { x: '광고', y: 100, label: 'C' },
                  { x: '광고', y: 100, label: 'C' },
                  { x: '광고', y: 100, label: 'C' },
                  { x: '광고', y: 100, label: 'C' },
                  { x: '광고', y: 100, label: 'C' },
                ]}
              />
              <VictoryBar
                data={[
                  { x: '광고', y: '광고', label: 'C' },
                  { x: '광고', y: '광고', label: 'C' },
                  { x: '광고', y: '광고', label: 'C' },
                  { x: '광고', y: '광고', label: 'C' },
                  { x: '광고', y: '광고', label: 'C' },
                ]}
              />
              <VictoryBar
                data={[
                  { x: '노출수', label: 'A' },
                  { x: '노출수', label: 'A' },
                  { x: '노출수', label: 'A' },
                  { x: '노출수', label: 'A' },
                  { x: '노출수', label: 'A' },
                ]}
              />
              <VictoryBar
                data={[
                  { x: '클릭수', label: 'D' },
                  { x: '클릭수', label: 'D' },
                  { x: '클릭수', label: 'D' },
                  { x: '클릭수', label: 'D' },
                  { x: '클릭수', label: 'D' },
                ]}
              />
              <VictoryBar
                data={[
                  { x: '전환수', label: 'Z' },
                  { x: '전환수', label: 'Z' },
                  { x: '전환수', label: 'Z' },
                  { x: '전환수', label: 'Z' },
                  { x: '전환수', label: 'Z' },
                ]}
              />
            </VictoryStack>
            <VictoryAxis />
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
