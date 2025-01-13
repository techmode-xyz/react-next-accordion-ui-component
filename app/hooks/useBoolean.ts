import { useCallback, useState } from 'react';
import { IBooleanHook } from '../intarfaces/global.interface';

export const useBoolean = (defaultValue = false): IBooleanHook => {
  const [state, setState] = useState<boolean>(defaultValue);

  const onTrue = useCallback(() => setState(true), []);
  const onFalse = useCallback(() => setState(false), []);
  const onToggle = useCallback(() => setState((prev) => !prev), []);

  return {
    state,
    onTrue,
    onFalse,
    onToggle,
  };
};
