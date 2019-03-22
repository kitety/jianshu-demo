import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;
export const Logo = styled.a.attrs({
  href: "/"
})`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  margin: 0 auto;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    color: #969696;
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  /* background: red; */
  position: relative;
  span {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    /* background: red; */
    text-align: center;
    cursor: pointer;
    transition: background 0.4s ease;
    &.focus {
      background: #969696;
      transition: background 0.4s ease;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  width: 250px;
  left: 20px;
  top: 56px;
  overflow: hidden;
  padding: 20px 20px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  overflow: hidden;
  div {
    float: left;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
  }
  a {
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    cursor: pointer;
  }
`;
export const SearchInfoItem = styled.a`
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 12px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 240px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 32px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  margin-left: 20px;
  transition: width 0.4s ease;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 320px;
    transition: width 0.4s ease;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ea6f5a;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 15px;
  &.reg {
    color: #ea6f5a;
  }
  &.writting {
    background: #ea6f5a;
    color: #fff;
  }
`;
