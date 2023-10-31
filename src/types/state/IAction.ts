export type IAction<ActionType = unknown> = {
  type: string;
  payload: ActionType;
};
