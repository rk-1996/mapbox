import {combineReducers} from "redux";

import PaginationReducer from "./paginationApi";
import MenuReducer from "./menu";

/*combine all reducers*/
const reducers = combineReducers({
  PaginationReducer,
  MenuReducer,
});

export default reducers;
