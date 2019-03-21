import { reducer as headerReducer} from "../common/header/store";
// import { combineReducers } from "redux"; // js对象
import { combineReducers } from "redux-immutable";  // immutable对象


const reducer = combineReducers({
  headerReducer
});
export default reducer;
