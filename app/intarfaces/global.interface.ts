export type TFalsy = false | null | undefined | 0 | '';

export interface IBooleanHook {
  state: boolean;
  onTrue: () => void;
  onFalse: () => void;
  onToggle: () => void;
}