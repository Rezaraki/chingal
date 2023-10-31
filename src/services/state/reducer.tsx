import { ACTION_TYPES } from '../../enums';
import { IAction, IState } from '../../types';

function reducer(state: IState, action: IAction<string | boolean>): IState {
  switch (action.type) {
    case ACTION_TYPES.SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload as string };
    case ACTION_TYPES.EXCUTE_SEARCH:
      return { ...state, excuteSearch: action.payload as boolean };
    default:
      return state;
  }
}
export default reducer;
