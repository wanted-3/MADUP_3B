import BigNumber from 'bignumber.js'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { Iads } from 'states/adListData'
import styles from './adItem.module.scss'

interface AdItemProps {
  ad: Iads
}

const adMoney = (value: number) => {
  const BigValue = new BigNumber(value)
  let answer

  if (value >= 10000) {
    const tenThousand = BigValue.dividedToIntegerBy(10000).toFormat()
    const oneThousand = BigValue.mod(10000).dividedToIntegerBy(1000)

    if (oneThousand.isEqualTo(0)) {
      answer = `${tenThousand}만원`
    } else {
      answer = `${tenThousand}만원 ${oneThousand}천원`
    }
  }

  if (value < 10000) {
    const temp = BigValue.dividedToIntegerBy(1000)
    answer = `${temp}천원`
  }
  return answer
}

const AdItem = ({ ad }: AdItemProps) => {
  const {
    adType,
    title,
    startDate,
    endDate,
    status,
    budget,
    report: { convValue, cost, roas },
  } = ad

  const adTitle = useMemo(() => {
    let adTypeName

    if (adType === 'web') adTypeName = '웹광고'
    if (adType === 'app') adTypeName = '앱광고'

    return `${adTypeName}_${title}`
  }, [adType, title])

  const adStatus = useMemo(() => {
    let adStatusName

    if (status === 'active') adStatusName = '진행중'
    if (status === 'ended') adStatusName = '중단됨'

    return adStatusName
  }, [status])

  const adDate = useMemo(() => {
    const startDay = dayjs(startDate).format('YYYY-MM-DD')
    const endDay = dayjs(endDate).format('YYYY-MM-DD')

    return status === 'ended' ? `${startDay}(${endDay})` : startDay
  }, [status, startDate, endDate])

  return (
    <div className={styles.containerWrapper}>
      <h2 className={styles.title}>{adTitle}</h2>
      <dl>
        <div>
          <dt>상태</dt>
          <dd>{adStatus}</dd>
        </div>

        <div>
          <dt>광고 생성일</dt>
          <dd>{adDate}</dd>
        </div>

        <div>
          <dt>일 희망 예산</dt>
          <dd>{adMoney(budget)}</dd>
        </div>

        <div>
          <dt>광고 수익률</dt>
          <dd>{roas}%</dd>
        </div>

        <div>
          <dt>매출</dt>
          <dd>{adMoney(convValue)}</dd>
        </div>

        <div>
          <dt>광고 비용</dt>
          <dd>{adMoney(cost)}</dd>
        </div>
      </dl>

      <button type='button' className={styles.editButton}>
        수정하기
      </button>
    </div>
  )
}

export default AdItem
