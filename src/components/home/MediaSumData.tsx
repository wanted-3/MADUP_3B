import { UseNumValue } from 'states/mediaData'
import styles from './mediaSumData.module.scss'

interface MediaSumDataProps extends UseNumValue {
  title: string
}

const MediaSumData = ({ title, cost, convValue, roas, imp, click, ctr, cpc }: MediaSumDataProps) => {
  return (
    <div className={styles.snsReports}>
      <span className={styles.snsTitle}>{title}</span>
      <span className={styles.snsDetail}>{cost}</span>
      <span className={styles.snsDetail}>{convValue}</span>
      <span className={styles.snsDetail}>{roas}</span>
      <span className={styles.snsDetail}>{imp}</span>
      <span className={styles.snsDetail}>{click}</span>
      <span className={styles.snsDetail}>{ctr}</span>
      <span className={styles.snsDetail}>{cpc}</span>
    </div>
  )
}

export default MediaSumData
