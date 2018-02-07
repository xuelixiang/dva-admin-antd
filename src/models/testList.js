import modelExtend from 'dva-model-extend'
import { query } from 'services/posts'
import { pageModel } from './common'
import queryString from 'query-string'

export default modelExtend(pageModel, {

  namespace: 'testList',

  subscriptions: {},


})