import BigNumber from 'bignumber.js'

import { DecrementIcon, IncrementIcon } from 'assets/svgs'

import styles from './adData.module.scss'

interface Props {
  title: string
  data: number
  result: number
}

interface IUnitName {
  [key: string]: string
}

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_HALF_UP })

const formatDataFunc = (dataTitle: string, dataNumber: number) => {
  const unitName: IUnitName = {
    ROAS: `${Number(new BigNumber(dataNumber).toFixed(0)).toLocaleString()} %`,
    광고비: `${new BigNumber(dataNumber).multipliedBy(0.0001).toFixed(1)} 만 원`,
    노출수: `${new BigNumber(dataNumber).multipliedBy(0.0001).toFixed(1)}만 회`,
    클릭수: `${new BigNumber(dataNumber).multipliedBy(0.001).toFormat(1)}천 회`,
    전환수: `${dataNumber} 회`,
    매출: `${Number(new BigNumber(dataNumber).multipliedBy(0.0001).toFixed(0)).toLocaleString()}만 회`,
  }
  return unitName[dataTitle]
}

const AdData = ({ title, data, result }: Props) => {
  return (
    <div className={styles.adData}>
      <p className={styles.title}>{title}</p>
      <div className={styles.content}>
        <span className={styles.resultNumber}>{formatDataFunc(title, data)}</span>
        <div className={styles.resultState}>
          {result > 0 && <IncrementIcon />}
          {result < 0 && <DecrementIcon />}
          <span className={styles.resultStateText}>{formatDataFunc(title, result)}</span>
        </div>
      </div>
    </div>
  )
}

export default AdData
