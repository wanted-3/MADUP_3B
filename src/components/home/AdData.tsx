import { IncrementIcon } from 'assets/svgs'
import styles from './adData.module.scss'

interface Props {
  title: string
  data: number
  result: number
}

const AdData = ({ title, data, result }: Props) => {
  return (
    <div className={styles.adData}>
      <p>{title}</p>
      <span>{data}</span>
      <div className={styles.resultState}>
        <IncrementIcon />
        <span>{result}</span>
      </div>
    </div>
  )
}

export default AdData
