import AdList from 'components/ad/AdList'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useMount } from 'react-use'
import { getAdListApi } from 'services/temp'
import { mountAdListData } from 'states/adListData'

const Ad = () => {
  const dispatch = useAppDispatch()

  useMount(() => {
    getAdListApi().then((res) => {
      dispatch(mountAdListData(res.data))
    })
  })

  return (
    <div>
      <AdList />
    </div>
  )
}

export default Ad
