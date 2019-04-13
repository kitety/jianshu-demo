import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent {
  render () {
    const { loginStatus } = this.props
    if(!loginStatus){
      return (
        <div>
          <LoginWrapper>
            <LoginBox >
              <Input placeholder="账号" type="text" ref={input => { this.account = input }} />
              <Input placeholder="密码" type="password" ref={input => { this.pwd = input }} />
              <Button onClick={() => this.props.login(this.account.value, this.pwd.value)}>登录</Button>
            </LoginBox>
          </LoginWrapper>
        </div>
      )
    }else{
      return <Redirect to='/'/>
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.getIn(["loginReducer", "login"])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login (account, pwd) {
      dispatch(actionCreators.login(account, pwd))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
