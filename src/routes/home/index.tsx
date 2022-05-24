import DatePicker from 'components/home/DatePicker'
import TotalAdData from 'components/home/TotalAdData'
import MediaData from 'components/home/MediaData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useMount } from 'react-use'
import { getTrendDataApi } from 'services/temp'

import styles from './home.module.scss'

const Home = () => {
  const dispatch = useAppDispatch()

  useMount(() => {
    getTrendDataApi().then((res) => {
      // console.log('트랜드 데이터', res.data)
    })
  })

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
        {/* <MediaData /> */}
      </main>
    </div>
  )
}

export default Home
