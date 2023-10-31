import { IAction } from './IAction';
import { IState } from './IState';

export interface IStore {
  state: IState;
  dispatch: React.Dispatch<IAction<string>>;
}
