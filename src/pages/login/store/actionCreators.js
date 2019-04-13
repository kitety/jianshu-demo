
import axios from 'axios'
import { constants } from './index'

export const ChangeLogin = (bool) => ({ type: constants.CHANGE_LOGIN,value:bool })

export const login = (account, pwd) => {
  return dispatch => {
    axios.get('/api/login.json?account=' + account + '&pwd=' + pwd).then((result) => {
      if (result.data.data) {
        dispatch(ChangeLogin(result.data.data))
      } else {
        console.log('Login Fail')
      }
    }).catch((err) => {
      console.log(err)
    });
  }
}
