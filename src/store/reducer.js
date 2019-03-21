import { reducer as headerReducer} from "../common/header/store";
import { combineReducers } from "redux";

const reducer = combineReducers({
  headerReducer
});
export default reducer;
