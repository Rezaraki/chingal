import { useMemo, useReducer } from 'react';
import reducer from './reducer';
import initialState from './initialState';

function useStore() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = useMemo(() => ({ state, dispatch }), [state]);

  return store;
}
export default useStore;
