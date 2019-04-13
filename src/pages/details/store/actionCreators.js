import axios from 'axios'
import { constants } from './index'

const changeDetail = data => ({ type: constants.GET_DETAIL, title:data.title,content:data.content })

export const getDetail = (id) => {
  return dispatch => {
    axios.get('/api/detail.json?id='+id).then((result) => {
      dispatch(changeDetail(result.data.data))
    }).catch((err) => {
      console.log(err)
    });
  }
}
