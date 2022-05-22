import styles from './adItem.module.scss'

const AdItem = () => {
  return (
    <div className={styles.containerWrapper}>
      <h2 className={styles.title}>웹광고_2021123123</h2>

      <dl>
        <div>
          <dt>상태</dt>
          <dd>진행중</dd>
        </div>

        <div>
          <dt>광고 생성일</dt>
          <dd>2021-06-04</dd>
        </div>

        <div>
          <dt>일 희망 예산</dt>
          <dd>40만원</dd>
        </div>

        <div>
          <dt>광고 수익률</dt>
          <dd>694%</dd>
        </div>

        <div>
          <dt>매출</dt>
          <dd>26,071만원</dd>
        </div>

        <div>
          <dt>광고 비용</dt>
          <dd>3,759만원</dd>
        </div>
      </dl>

      <button type='button' className={styles.editButton}>
        수정하기
      </button>
    </div>
  )
}

export default AdItem
