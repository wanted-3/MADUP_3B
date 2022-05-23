import AdList from 'components/ad/AdList'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useMount } from 'react-use'
import { getAdListApi } from 'services/temp'
import { firstTemp } from 'states/adListData'

const Ad = () => {
  const dispatch = useAppDispatch()

  useMount(() => {
    getAdListApi().then((res) => {
      dispatch(firstTemp(res.data))
    })
  })

  return (
    <div>
      <AdList />
    </div>
  )
}

export default Ad
