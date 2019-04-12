import { fromJS } from "immutable";
import * as constants from './constants'

const nameInitialState = fromJS({
  listItem: [],
  recommandList: [],
  articleList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => (
  state.merge({
    articleList: fromJS(action.data.articleList),
    listItem: fromJS(action.data.listItem),
    recommandList: fromJS(action.data.recommandList)
  })
)
const getMoreList = (state, action) => (
  state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.page
  })
)


export default (state = nameInitialState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.GET_MORE_LIST:
      return getMoreList(state, action)
      break;
    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.bool)
      break;
    default:
      break;
  }
  return state
};
