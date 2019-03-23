import * as constants from "./constants";
import { fromJS } from "immutable";

// immutable对象
const nameInitialState = fromJS({
  focus: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 0
});
export default (state = nameInitialState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // immutable set:结合之前的immutable对象的值，返回一个全新的对象
      return state.set("focus", true);
    case constants.SEARCH_BLUR:
      return state.set("focus", false);
    case constants.CHANGE_LIST:
      // 把一个immutable的数组变为一个普通数组 出错
      // 因此在Reducer里面变了的
      // return state.set("list", action.data).set("totalPage", action.totalPage);
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.INFO_MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.INFO_MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);

    default:
      return state;
  }
};
