import styles from './mediaData.module.scss'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectadMediaData } from 'states/mediaData'
import MediaSumData from './MediaSumData'
import MediaChart from './MediaChart'

const MediaData = () => {
  const mediaData = useAppSelector(selectadMediaData)

  return (
    <div className={styles.mediaData}>
      <h1 className={styles.title}>매체현황</h1>
      <div className={styles.trendWrap}>
        <div className={styles.trendChart}>
          <MediaChart />
        </div>
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
