import { config, request } from '../utils'

const { api } = config
const { sexList, testList } = api

export async function query (params) {
  return request({
    url: sexList,
    method: 'get',
    data: params,
  })
}