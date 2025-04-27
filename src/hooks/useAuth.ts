import { useContext } from 'solid-js';

import { AuthContext } from '#ui/context';

export function useAuth() {
  return useContext(AuthContext);
}
