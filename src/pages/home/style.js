import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  /* 触发bfc */
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  padding-top: 30px;
  width: 625px;
  margin-left: 15px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  .topic-item {
    margin-right: 15px;
    margin-bottom: 8px;
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    cursor: pointer;
    img {
      display: block;
      float: left;
      height: 100%;
      width: 32px;
      margin-right: 10px;
    }
  }
`;
