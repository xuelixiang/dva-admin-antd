import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs, Icon } from 'antd'
import { routerRedux } from 'dva/router'
import queryString from 'query-string'
import { Page } from 'components'
import List from './List'

const { TabPane } = Tabs

const EnumPostStatus = {
  statusOne: 1,
  statusTwo: 2,
}

const Index = ({ testList, dispatch, loading, location }) => {
  const { list, pagination } = testList
  location.query = queryString.parse(location.search)
  const { query, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['testList'],
    onChange (page) {
      console.log("page:",page);
      dispatch(routerRedux.push({
        pathname,
        search: queryString.stringify({
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        }),
      }))
    },
  }

  const handleTabClick = (key) => {
    console.log("key:",key);
    dispatch(routerRedux.push({
      pathname,
      search: queryString.stringify({
        status: key,
      }),
    }))
  }

  return (<Page inner>
      <Tabs activeKey={query.status === String(EnumPostStatus.statusOne) ? String(EnumPostStatus.statusOne) : String(EnumPostStatus.statusTwo)} onTabClick={handleTabClick}>
        <TabPane tab={<span><Icon type="apple" />StatusTwo</span>} key={String(EnumPostStatus.statusTwo)}>
          <List {...listProps} />
        </TabPane>
        <TabPane tab={<span><Icon type="android" />StatusOne</span>} key={String(EnumPostStatus.statusOne)}>
          <List {...listProps} />
        </TabPane>
      </Tabs>
    </Page>)
}

Index.propTypes = {
  testList: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ testList, loading }) => ({ testList, loading }))(Index)