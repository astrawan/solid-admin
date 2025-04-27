import { useNavigate } from '@solidjs/router';
import { type JSX, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

import { ROUTE_PATH } from '#ui/constants';
import { AuthContext, type AuthContextValue } from '#ui/context';

export function AuthProvider(props: JSX.HTMLAttributes<HTMLElement>) {
  const navigate = useNavigate();
  const [store, setStore] = createStore<AuthContextValue[0]>(
    AuthContext.defaultValue[0],
  );

  createEffect(() => {
    if (store.status === 'verified') {
      navigate(ROUTE_PATH.index);
    }
  });

  const value: AuthContextValue = [
    store,
    {
      login() {
        console.debug('login...');
        setStore('status', 'verified');
      },
      logout() {},
    },
  ];

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
