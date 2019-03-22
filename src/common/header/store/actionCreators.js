import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({ type: constants.SEARCH_FOCUS });
export const searchBlur = () => ({ type: constants.SEARCH_BLUR });
const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});
export const getList = () => {
  return dispatch => {
    // 异步请求
    axios
      .get("/api/headerList.json")
      .then(result => {
        const { data } = result.data;
        dispatch(changeList(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
