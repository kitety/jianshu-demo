import React, { PureComponent } from 'react'
import { DatailsWrapper, Header, Content } from './style'
import { connect } from 'react-redux';
import { actionCreators } from "./store";
import {withRouter} from 'react-router-dom'

class Details extends PureComponent {
  render () {
    console.log(this.props.match.params.id)
    const { title, content } = this.props
    return (
      <DatailsWrapper>
        <Header>
          {title}
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}>
        </Content>
      </DatailsWrapper>
    )
  }
  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    title: state.getIn(['detailReducer', 'title']),
    content: state.getIn(['detailReducer', 'content'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetail: (id) => {
      dispatch(actionCreators.getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details))
