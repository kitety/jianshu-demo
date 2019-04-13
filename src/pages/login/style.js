import styled from 'styled-components';
export const LoginWrapper = styled.div`
  z-index:0;
  position:absolute;
  left:0;
  right: 0;
  bottom:0;
  top:56px;
  background-color:#eee;
  display:flex;
  justify-content:center;
`
export const LoginBox = styled.div`
  width: 400px;
  height:180px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
  padding-top:20px;
`
export const Input = styled.input`
  display:block;
  width:200px;
  height: 30px;
  line-height:30px;
  padding:0 10px;
  margin:10px  auto;
  color:#777;
`
export const Button = styled.div`
  width:220px;
  height: 30px;
  line-height:30px;
  background:#3194d0;
  border-radius:15px;
  margin:10px auto;
  text-align:center;
  cursor: pointer;
`
