import { reducer as headerReducer} from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
// import { combineReducers } from "redux"; // js对象
import { combineReducers } from "redux-immutable";  // immutable对象


const reducer = combineReducers({
  headerReducer, homeReducer
});
export default reducer;
