import {SELECT_MENU} from "../constants";

/*initial state*/
const INITIAL_STATE = {
  menu: 'Loss in Employment Income'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_MENU:
      return {...state, menu: action.payload};
    default:
      return state;
  }
}
