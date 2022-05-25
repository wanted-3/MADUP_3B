import cx from 'classnames'

import type { IUseNumValue } from 'states/mediaData'

import styles from './mediaSumData.module.scss'

interface MediaSumDataProps extends IUseNumValue {
  title: string
}

const MediaSumData = ({ title, cost, convValue, roas, imp, click, ctr, cpc }: MediaSumDataProps) => {
  return (
    <tr className={cx(styles.mediaSumWrap, { [styles.total]: title === '합계' })}>
      <td>{title}</td>
      <td>{cost}</td>
      <td>{convValue}</td>
      <td>{roas}</td>
      <td>{imp}</td>
      <td>{click}</td>
      <td>{ctr}</td>
      <td>{cpc}</td>
    </tr>
  )
}

export default MediaSumData
