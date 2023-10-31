import { IAction, IState } from '../types';

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return { ...state, searchValue: action.payload as string };
    default:
      return state;
  }
}
export default reducer;
