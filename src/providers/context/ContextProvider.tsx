import { Dispatch, PropsWithChildren, createContext } from 'react';
import { IAction, IState } from '../../types';
import { useStore } from '../../state';

function ContextProvider({ children }: PropsWithChildren) {
  const store = useStore();
  const Context = createContext<{ state: IState; dispatch: Dispatch<IAction> } | undefined>(undefined);

  return <Context.Provider value={store}>{children}</Context.Provider>;
}
export default ContextProvider;
