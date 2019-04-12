import React, { Component,PureComponent } from 'react'
import { RecommandWrapper, RecommandItem } from '../style'
import { connect } from 'react-redux'

class List extends PureComponent {
  render () {
    const { recommandList } = this.props
    return (
      <RecommandWrapper>
        {
          recommandList.map(item => (<RecommandItem imageUrl={item.get('imgUrl')} key={item.get('id')} />))
        }
      </RecommandWrapper>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    recommandList: state.getIn(['homeReducer', 'recommandList'])
  }
}
export default connect(mapStateToProps, null)(List)

