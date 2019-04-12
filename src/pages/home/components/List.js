import React, { Component, PureComponent} from 'react'
import {connect} from 'react-redux'
import {ListItem, Loadmore} from '../style'
import {actionCreators} from '../store'


class List extends PureComponent {
  render() {
    const {articleList, getMoreList, page} = this.props
    return (
      <>
        {
          articleList.map((item, index) => (
            <ListItem key={index}>
              <div className="list-info">
                <h3>{item.get('title')}</h3>
                <p>{item.get('desc')}</p>
              </div>
              <img src={item.get('imgUrl')} alt={item.get('title')}/>
            </ListItem>
          ))
        }
        <Loadmore onClick={getMoreList.bind(this, page)}>更多文字</Loadmore>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articleList: state.getIn(['homeReducer', 'articleList']),
    page: state.getIn(['homeReducer', 'articlePage'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMoreList: (page) => {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
