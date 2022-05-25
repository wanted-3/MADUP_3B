import { useMount } from 'react-use'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { mountAdListData } from 'states/adListData'
import { getAdListApi } from 'services/getData'

import AdvertiseManageList from 'components/advertiseManage/AdvertiseManageList'

import styles from './advertiseManage.module.scss'

const AdvertiseManage = () => {
  const dispatch = useAppDispatch()

  useMount(() => {
    getAdListApi().then((res) => {
      dispatch(mountAdListData(res.data))
    })
  })

  return (
    <div className={styles.ad}>
      <h1 className={styles.title}>광고관리</h1>
      <AdvertiseManageList />
    </div>
  )
}

export default AdvertiseManage
