import { createContext } from 'solid-js';

export type AuthStatus = 'unverified' | 'verified';

export type AuthContextValue = [
  { status?: AuthStatus },
  {
    login: () => void;
    logout: () => void;
  },
];

export const AuthContext = createContext<AuthContextValue>([
  {},
  {
    login: () => {},
    logout: () => {},
  },
]);
