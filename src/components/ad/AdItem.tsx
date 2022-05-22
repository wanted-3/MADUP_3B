import { Iads } from 'states/adListData'
import styles from './adItem.module.scss'

interface AdItemProps {
  ad: Iads
}

const AdItem = ({ ad }: AdItemProps) => {
  // console.log(ad)

  return (
    <div className={styles.containerWrapper}>
      <h2 className={styles.title}>{ad.adType}_2021123123</h2>

      <dl>
        <div>
          <dt>상태</dt>
          <dd>{ad.status}</dd>
        </div>

        <div>
          <dt>광고 생성일</dt>
          <dd>{ad.startDate}</dd>
        </div>

        <div>
          <dt>일 희망 예산</dt>
          <dd>{ad.budget / 10000}만원</dd>
        </div>

        <div>
          <dt>광고 수익률</dt>
          <dd>{ad.report.roas}%</dd>
        </div>

        <div>
          <dt>매출</dt>
          <dd>{ad.report.convValue}만원</dd>
        </div>

        <div>
          <dt>광고 비용</dt>
          <dd>{ad.report.cost / 10000}만원</dd>
        </div>
      </dl>

      <button type='button' className={styles.editButton}>
        수정하기
      </button>
    </div>
  )
}

export default AdItem
