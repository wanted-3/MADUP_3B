import AdItem from './AdItem'
import styles from './adList.module.scss'

const AdList = () => {
  return (
    <div className={styles.containerWrapper}>
      <h1 className={styles.title}>광고관리</h1>

      <div className={styles.itemWrapper}>
        <div className={styles.itemTop}>
          <button type='button' className={styles.toggleButton}>
            전체 광고
          </button>
          <button type='button' className={styles.createButton}>
            광고 만들기
          </button>
        </div>

        <div className={styles.itemGrid}>
          {[1, 2, 3, 4, 5].map((item) => (
            <AdItem key={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdList
