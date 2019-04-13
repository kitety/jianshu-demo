import styled from "styled-components";

export const DatailsWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  /* 触发bfc */
  overflow: hidden;
  padding-bottom:100px;
`;
export const Header = styled.div`
  margin:50px 0 20px 0;
  font-size:34px;
  line-height:44px;
  color:#333;
  font-weight:700;
`;
export const Content = styled.div`
  color:#2f2f2f;
  img{
    max-width:100%;
  }
  p{
    margin:25px 0;
    text-indent:2em;
    color: #2f2f2f;
    word-break: break-word !important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }
`;
