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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }
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
              className={this.state.focus ? "focus" : ""}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            />
            <span className={this.state.focus ? "focus iconfont" : " iconfont"}>
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
    prop: state.prop
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
