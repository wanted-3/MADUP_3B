import BigNumber from 'bignumber.js'
import dayjs from 'dayjs'
import { useMemo } from 'react'

import type { IAds } from 'states/adListData'
import styles from './advertiseManageItem.module.scss'

interface AdItemProps {
  advertiseItem: IAds
}

const adMoneyUnitFunc = (value: number) => {
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
    answer = `${BigValue.dividedToIntegerBy(1000)}천원`
  }
  return answer
}

const AdvertiseManageItem = ({ advertiseItem }: AdItemProps) => {
  const {
    adType,
    title,
    startDate,
    endDate,
    status,
    budget,
    report: { convValue, cost, roas },
  } = advertiseItem

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

  const budgetUnit = adMoneyUnitFunc(budget)
  const convValueUnit = adMoneyUnitFunc(convValue)
  const costUnit = adMoneyUnitFunc(cost)

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
          <dd>{budgetUnit}</dd>
        </div>

        <div>
          <dt>광고 수익률</dt>
          <dd>{roas}%</dd>
        </div>

        <div>
          <dt>매출</dt>
          <dd>{convValueUnit}</dd>
        </div>

        <div>
          <dt>광고 비용</dt>
          <dd>{costUnit}</dd>
        </div>
      </dl>

      <button type='button' className={styles.editButton}>
        수정하기
      </button>
    </div>
  )
}

export default AdvertiseManageItem
