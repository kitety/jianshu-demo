import React, { Component ,PureComponent} from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  SearchInfo,
  SearchInfoItem,
  SearchInfoTitle,
  Button,
  SearchWrapper
} from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Header extends PureComponent {
  render() {
    const {
      focus,
      handleInputFocus,
      handleInputBlur,
      list,
      page,
      totalPage,
      handleChangePage,
      handleInfoMouseEnter,
      handleInfoMouseLeave,
      mouseIn
    } = this.props;
    const jsList = list.toJS();
    const searchItemList = [];
    if (jsList.length > 0) {
      for (let i = (page - 1) * 10; i < 10 * page; i++) {
        searchItemList.push(jsList[i]);
      }
    }
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
              className={focus ? "focus" : ""}
              onFocus={handleInputFocus.bind(this, list)}
              onBlur={handleInputBlur}
            />
            <span className={focus ? "focus iconfont zoom" : " iconfont zoom"}>
              &#xe614;
            </span>
            {// 列表
            (focus || mouseIn) && (
              <SearchInfo
                onMouseEnter={handleInfoMouseEnter}
                onMouseLeave={handleInfoMouseLeave}
              >
                <SearchInfoTitle>
                  <div>热门搜索</div>
                  <a
                    onClick={handleChangePage.bind(
                      this,
                      page,
                      totalPage,
                      this.spin
                    )}
                  >
                    换一批
                  </a>
                  <span
                    className="iconfont spin"
                    ref={spin => {
                      this.spin = spin;
                    }}
                  >
                    &#xe851;
                  </span>
                </SearchInfoTitle>
                <div>
                  {searchItemList.map(item => {
                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
                  })}
                </div>
              </SearchInfo>
            )}
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
    focus: state.getIn(["headerReducer", "focus"]),
    page: state.getIn(["headerReducer", "page"]),
    totalPage: state.getIn(["headerReducer", "totalPage"]),
    list: state.getIn(["headerReducer", "list"]),
    mouseIn: state.getIn(["headerReducer", "mouseIn"])
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        console.log(actionCreators.getList())
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleInfoMouseEnter() {
      dispatch(actionCreators.infoMouseEnter());
    },
    handleInfoMouseLeave() {
      dispatch(actionCreators.infoMouseleave());
    },
    handleChangePage(page, totalPage, spin) {
      const originAngle = Number(spin.style.transform.replace(/[^0-9]/gi, ""));
      let nextPage = page + 1;
      if (nextPage + 1 > totalPage) {
        nextPage = 1;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      dispatch(actionCreators.changePage(nextPage));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
