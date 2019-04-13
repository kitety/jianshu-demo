import React, { Component, PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Download from "./components/Download";
import Recommend from "./components/Recommend";
import axios from 'axios';
import { connect } from 'react-redux'
import { constants, actionCreators } from "./store";

class Home extends PureComponent {
  handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }
  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  unbindEvents = () => {
    window.addEventListener('scroll', null)
  }
  render () {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src="https://i.loli.net/2019/04/13/5cb199ad962f0.png"
            className="banner-img"
            alt="banner"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Download />
        </HomeRight>
        {
          showScroll && <BackToTop onClick={this.handleScrollToTop}>回到顶部</BackToTop>
        }
      </HomeWrapper>
    );
  }

  componentDidMount () {
    this.bindEvents()
    this.props.changeHomeData()
    // axios.get('/api/home.json').then((result) => {
    //   this.props.changeHomeData(result.data.data)
    // }).catch((err) => {
    //   console.log(err)
    // });
  }
  componentWillUnmount () {
    this.unbindEvents()
  }
};
const mapStateToProps = (state, ownProps) => {
  return {
    showScroll: state.getIn(['homeReducer', 'showScroll'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeHomeData: () => {
      // let HomeTempAction = {
      //   data: data,
      //   type: constants.CHANGE_HOME_DATA
      // }
      dispatch(actionCreators.getHomeInfo())
      // dispatch(HomeTempAction)
    },
    changeScrollTopShow: (e) => {
      dispatch(actionCreators.toggleTopShow(document.documentElement.scrollTop > 0))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
