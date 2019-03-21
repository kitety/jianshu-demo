import * as constants from "./constants";
const nameInitialState = {
  focus: false
};
export default (state = nameInitialState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return {
        focus: true
      };
    case constants.SEARCH_BLUR:
      return {
        focus: false
      };

    default:
      return state;
  }
};
