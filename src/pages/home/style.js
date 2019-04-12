import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  /* 触发bfc */
  overflow: hidden;
`;
//回到顶部
export const BackToTop = styled.div`
  position:fixed;
  width:73px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #dcdcdc;
  right:0;
  bottom:62px;
  background:#ccc;
  cursor: pointer;
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
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom:1px solid #dcdcdc;
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
export const ListItem = styled.div`
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  img{
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
  .list-info{
    width:500px;
    float:left;
    h3{
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
      color:#333;
    }
    p{
      font-size:13px;
      line-height:18px;
      color:#999;
    }
  }
`
export const RecommandWrapper = styled.div`
  margin:30px 0;
  width:280px;
`
export const RecommandItem = styled.div`
  width:280px;
  height:50px;
  background:url(${props => props.imageUrl});
  background-size:contain;
`
export const Loadmore = styled.div`
    border-radius: 20px;
    background-color: #a5a5a5;
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px auto 60px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;
    text-align:center;
    cursor: pointer;
`
