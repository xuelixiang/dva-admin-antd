import React from 'react'
import queryString from 'query-string'
import propTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Tabs, Icon } from 'antd'
import { Page } from 'components'

const { TabPane } = Tabs

const Index = ({ sexList, loading, dispatch, location }) => {

  return (
    <div>aaa</div>
  )

}

export default connect(({ sexList, loading }) => ({ sexList, loading }))(Index)