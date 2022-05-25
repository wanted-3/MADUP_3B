import cx from 'classnames'

import type { IUseNumValue } from 'states/mediaData'

import styles from './mediaSumData.module.scss'

interface MediaSumDataProps extends IUseNumValue {
  title: string
}

const MediaSumData = ({ title, cost, convValue, roas, imp, click, ctr, cpc }: MediaSumDataProps) => {
  return (
    <tr className={cx(styles.mediaSumWrap, { [styles.total]: title === '합계' })}>
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
