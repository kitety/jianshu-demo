import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Header extends Component {
  handleInputFocus = () => {
    this.setState({
      focus: true
    });
  };
  handleInputBlur = () => {
    this.setState({
      focus: false
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">
            <span className="iconfont">&#xe604;</span>
            <span>首页</span>
          </NavItem>
          <NavItem className="left">
            <span className="iconfont">&#xe6ef;</span>
            <span>下载</span>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              className={this.props.focus ? "focus" : ""}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            />
            <span className={this.props.focus ? "focus iconfont" : " iconfont"}>
              &#xe614;
            </span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe616;</span>
            <span>写文章</span>
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    // 等价的
    // focus: state.get("headerReducer").get("focus")
    focus: state.getIn(["headerReducer", "focus"])
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
