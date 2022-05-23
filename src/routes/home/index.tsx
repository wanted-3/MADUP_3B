import DatePicker from 'components/home/datePicker/DatePicker'
import TotalAdData from 'components/home/TotalAdData'
import TrendData from 'components/home/TrendData'

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
      <TotalAdData />
      <TrendData />
    </div>
  )
}

export default Home
