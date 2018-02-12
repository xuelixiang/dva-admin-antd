import modelExtend from 'dva-model-extend'
import { query } from '../services/sexList'
import { pageModel } from './common'
import queryString from 'query-string'

export default modelExtend(pageModel, {

  namespace: 'sexList',

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if(pathname === '/navigation/navigation2/navigation2/sexList') {
          dispatch({
            type: 'query',
            payload: {
              ...queryString.parse(location.search),
            },
          })
        }
      })
    },
  },

  effects: {
    * query ({ payload }, { call, put }) {
      const data = yield call(query, payload)
      if(data.success){
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
           },
        })
      } else {
        throw data
      }
    },
  },
  
})

