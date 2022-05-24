import { DecrementIcon, IncrementIcon } from 'assets/svgs'
import styles from './adData.module.scss'

interface Props {
  title: string
  data: number
  result: number
}

const AdData = ({ title, data, result }: Props) => {
  return (
    <div className={styles.adData}>
      <p className={styles.title}>{title}</p>
      <div className={styles.content}>
        <span className={styles.resultNumber}>{data}</span>
        <div className={styles.resultState}>
          {result > 0 && <IncrementIcon />}
          {result < 0 && <DecrementIcon />}
          <span className={styles.resultStateText}>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default AdData
