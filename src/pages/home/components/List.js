import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, Loadmore } from '../style'


class List extends Component {
  render () {
    const { articleList, getMoreList } = this.props
    return (
      <>
        {
          articleList.map(item => (
            <ListItem key={item.get('id')}>
              <div className="list-info">
                <h3>{item.get('title')}</h3>
                <p>{item.get('desc')}</p>
              </div>
              <img src={item.get('imgUrl')} alt={item.get('title')} />
            </ListItem>
          ))
        }
        <Loadmore onClick={getMoreList}>更多文字</Loadmore>
      </>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    articleList: state.getIn(['homeReducer', 'articleList'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMoreList: () => {
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
