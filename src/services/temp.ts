import { axios } from 'hooks/worker'

const adListDataUrl = '/data/wanted_FE_ad-list-data-set.json'
const trendDataUrl = '/data/wanted_FE_trend-data-set.json'
const mediaDataUrl = '/data/wanted_FE-media-channel-data-set.json'

export const getAdListApi = () => {
  return axios.get(adListDataUrl)
}

export const getTrendDataApi = () => {
  return axios.get(trendDataUrl)
}

export const getMediaDataApi = () => {
  return axios.get(mediaDataUrl)
}
