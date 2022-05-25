import DatePicker from 'components/home/DatePicker'
import TotalAdData from 'components/home/totalAdData'
import MediaData from 'components/home/mediaData'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>대시보드</h1>
        <div className={styles.datePicker}>
          <DatePicker />
        </div>
      </header>
      <main className={styles.main}>
        <TotalAdData />
        <MediaData />
      </main>
    </div>
  )
}

export default Home
