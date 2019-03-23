import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({ type: constants.SEARCH_FOCUS });
export const searchBlur = () => ({ type: constants.SEARCH_BLUR });
export const infoMouseEnter = () => ({ type: constants.INFO_MOUSE_ENTER });
export const infoMouseleave = () => ({ type: constants.INFO_MOUSE_LEAVE });
export const changePage = page => ({ type: constants.CHANGE_PAGE, page });
const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
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
