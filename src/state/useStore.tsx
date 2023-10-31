import { useMemo, useReducer } from 'react';
import reducer from './reducer';
import { IState } from '../types';

function useStore() {
  const initialState: IState = { searchValue: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = useMemo(() => ({ state, dispatch }), [state]);

  return store;
}
export default useStore;
