import MediaChart from './MediaChart'
import MediaDataTable from './MediaDataTable'

import styles from './mediaData.module.scss'

const MediaData = () => {
  return (
    <div className={styles.mediaData}>
      <h1 className={styles.title}>매체현황</h1>
      <div className={styles.mediaDataWrap}>
        <MediaChart />
        <MediaDataTable />
      </div>
    </div>
  )
}

export default MediaData
