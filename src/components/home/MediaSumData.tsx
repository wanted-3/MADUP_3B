import { UseNumValue } from 'states/mediaData'
import styles from './mediaSumData.module.scss'

interface MediaSumDataProps extends UseNumValue {
  title: string
}

const MediaSumData = ({ title, cost, convValue, roas, imp, click, ctr, cpc }: MediaSumDataProps) => {
  return (
    <div className={styles.snsReports}>
      <span className={styles.snsTitle}>{title}</span>
      <span>{cost}</span>
      <span>{convValue}</span>
      <span>{roas}</span>
      <span>{imp}</span>
      <span>{click}</span>
      <span>{ctr}</span>
      <span>{cpc}</span>
    </div>
  )
}

export default MediaSumData
