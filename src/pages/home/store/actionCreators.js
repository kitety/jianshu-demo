import axios from 'axios';
import { CHANGE_HOME_DATA, GET_MORE_LIST, TOGGLE_TOP_SHOW} from './constants'
import {fromJS, List} from "immutable";

export const changeHomeData = data => ({type: CHANGE_HOME_DATA, data});
//注意fromJS,List的区别，List只转换外层，fromJS内层也要转换
export const getMoreListAction = (data, page) => ({type: GET_MORE_LIST, list: fromJS(data), page: page + 1});
export const toggleTopShow = (bool) => ({ type: TOGGLE_TOP_SHOW, bool});

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
export const getMoreList = (page) => {
  return dispatch => {
    axios.get('/api/homeList.json?page=' + page).then((result) => {
      // let HomeTempAction = {
      //   data: result.data.data,
      //   type: CHANGE_HOME_DATA
      // }
      dispatch(getMoreListAction(result.data.data, page))
    }).catch((err) => {
      console.log(err)
    });
  };
};
