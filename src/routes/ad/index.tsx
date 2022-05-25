import AdList from 'components/ad/AdList'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useMount } from 'react-use'
import { getAdListApi } from 'services/temp'
import { mountAdListData } from 'states/adListData'

import styles from './ad.module.scss'

const Ad = () => {
  const dispatch = useAppDispatch()

  useMount(() => {
    getAdListApi().then((res) => {
      dispatch(mountAdListData(res.data))
    })
  })

  return (
    <div className={styles.ad}>
      <h1 className={styles.title}>광고관리</h1>
      <AdList />
    </div>
  )
}

export default Ad
