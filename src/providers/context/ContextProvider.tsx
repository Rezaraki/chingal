import { PropsWithChildren, createContext } from 'react';

import { useStore } from '../../services/state';
import { IStore } from '../../types';

const Context = createContext<IStore | null>(null);

function ContextProvider({ children }: PropsWithChildren) {
  const store = useStore();

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
