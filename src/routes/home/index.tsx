import DatePicker from 'components/home/DatePicker'
import TotalAdData from 'components/home/TotalAdData'
import MediaData from 'components/home/MediaData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useMount } from 'react-use'
import { getMediaDataApi, getTrendDataApi } from 'services/temp'

import styles from './home.module.scss'
import { temp } from 'states/mediaData'

const Home = () => {
  const dispatch = useAppDispatch()

  useMount(() => {
    getTrendDataApi().then((res) => {
      // console.log('트랜드 데이터', res.data)
    })

    getMediaDataApi().then((res) => {
      // console.log('미디어 데이터', res.data)
      dispatch(temp(res.data))
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
      <TotalAdData />
      <MediaData />
    </div>
  )
}

export default Home
