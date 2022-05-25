import styles from './mediaData.module.scss'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectadMediaData } from 'states/mediaData'
import MediaSumData from './MediaSumData'
import { CircleIcon } from 'assets/svgs'
import MediaChart from './MediaChart'

const SNS_COLORS = [
  { name: '페이스북', color: '#7FA2FF' },
  { name: '구글', color: '#AC8AF8' },
  { name: '네이버', color: '#85DA47' },
  { name: '카카오', color: '#F9F871' },
]

const MediaData = () => {
  const mediaData = useAppSelector(selectadMediaData)

  return (
    <div className={styles.mediaData}>
      <h1 className={styles.title}>매체현황</h1>
      <div className={styles.trendWrap}>
        <div className={styles.trendChart}>
          <MediaChart />
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
