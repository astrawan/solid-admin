import { useContext } from 'solid-js';

import { UIContext } from '#ui/context';

export function useUI() {
  return useContext(UIContext);
}
