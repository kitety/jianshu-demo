import * as constants from "./constants";
import { fromJS } from "immutable";

// immutable对象
const nameInitialState = fromJS({
  focus: false
});
export default (state = nameInitialState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // immutable set:结合之前的immutable对象的值，返回一个全新的对象
      return state.set("focus", true);
    case constants.SEARCH_BLUR:
      return state.set("focus", false);

    default:
      return state;
  }
};
