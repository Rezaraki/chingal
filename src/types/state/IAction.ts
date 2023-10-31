import { ACTION_TYPES } from '../../enums';

export type IAction<ActionType = unknown> = {
  type: keyof typeof ACTION_TYPES;
  payload: ActionType;
};
