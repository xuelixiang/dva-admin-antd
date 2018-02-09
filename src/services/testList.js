import { request, config } from 'utils'

const { api } = config
const { testList } = api

export async function query (params) {
  return request({
    url: testList,
    method: 'get',
    data: params,
  })
}