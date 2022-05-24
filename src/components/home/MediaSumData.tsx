import { UseNumValue } from 'states/mediaData'
import styles from './mediaSumData.module.scss'

interface MediaSumDataProps extends UseNumValue {
  title: string
}

const MediaSumData = ({ title, cost, convValue, roas, imp, click, ctr, cpc }: MediaSumDataProps) => {
  return (
    <tr className={styles.mediaSumWrap}>
      <td className={styles.snsTitle}>{title}</td>
      <td className={styles.snsDetail}>{cost}</td>
      <td className={styles.snsDetail}>{convValue}</td>
      <td className={styles.snsDetail}>{roas}</td>
      <td className={styles.snsDetail}>{imp}</td>
      <td className={styles.snsDetail}>{click}</td>
      <td className={styles.snsDetail}>{ctr}</td>
      <td className={styles.snsDetail}>{cpc}</td>
    </tr>
  )
}

export default MediaSumData
