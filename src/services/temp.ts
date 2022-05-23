import { axios } from 'hooks/worker'

const url = '/data/wanted_FE_ad-list-data-set.json'

export const getTempApi = () => {
  return axios.get(url)
}
