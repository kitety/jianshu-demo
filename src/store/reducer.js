import { reducer as headerReducer} from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/details/store";
import { reducer as loginReducer } from "../pages/login/store";
// import { combineReducers } from "redux"; // js对象
import { combineReducers } from "redux-immutable";  // immutable对象


const reducer = combineReducers({
  headerReducer, homeReducer, detailReducer, loginReducer
});
export default reducer;
