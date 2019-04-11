import { fromJS } from "immutable";
import { CHANGE_HOME_DATA, GET_MORE_LIST} from "./constants";

const nameInitialState = fromJS({
  listItem: [],
  recommandList: [],
  articleList: []
});
export default (state = nameInitialState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        articleList: fromJS(action.data.articleList),
        listItem: fromJS(action.data.listItem),
        recommandList: fromJS(action.data.recommandList)
      });
    case GET_MORE_LIST:
    break;
    default:
      break;
  }
  return state
};
