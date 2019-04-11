import axios from 'axios';
import { CHANGE_HOME_DATA, GET_MORE_LIST } from './constants'

export const changeHomeData = data => ({ type: CHANGE_HOME_DATA, data });
export const getMoreListAction = data => ({ type: GET_MORE_LIST, data });

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json').then((result) => {
      // let HomeTempAction = {
      //   data: result.data.data,
      //   type: CHANGE_HOME_DATA
      // }
      dispatch(changeHomeData(result.data.data))
    }).catch((err) => {
      console.log(err)
    });
  };
};
export const getMoreList = () => {
  return dispatch => {
    axios.get('/api/homeList.json').then((result) => {
      // let HomeTempAction = {
      //   data: result.data.data,
      //   type: CHANGE_HOME_DATA
      // }
      dispatch(changeHomeData(result.data.data))
    }).catch((err) => {
      console.log(err)
    });
  };
};
