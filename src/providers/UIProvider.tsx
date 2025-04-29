import { useLocation } from '@solidjs/router';
import { type JSX, createEffect, createMemo, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';

import {
  UIContext,
  type UIContextValue,
  type UISiderbarState,
  type UIThemeState,
} from '#ui/context';

export function UIProvider(props: JSX.HTMLAttributes<HTMLElement>) {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);
  let lastPathname: string | undefined;

  const [store, setStore] = createStore<UIContextValue[0]>(
    UIContext.defaultValue[0],
  );

  onMount(() => {
    const sidebarConfig = localStorage.getItem('sidebar');
    if (sidebarConfig) {
      const sidebar = sidebarConfig as UISiderbarState;
      if (
        (['full', 'mini'] as UISiderbarState[]).indexOf(
          sidebarConfig as UISiderbarState,
        ) > -1
      ) {
        setStore('sidebar', sidebar);
      }
    }

    const themeConfig = localStorage.getItem('theme');
    if (themeConfig) {
      const theme = themeConfig as UIThemeState;
      if (
        (['light', 'dark'] as UIThemeState[]).indexOf(
          themeConfig as UIThemeState,
        ) > -1
      ) {
        setStore('theme', theme);
      }
    }
  });

  createEffect(() => {
    const _pathname = pathname();
    if (
      _pathname &&
      !window.matchMedia('(min-width: 64rem)').matches &&
      lastPathname !== _pathname
    ) {
      lastPathname = _pathname;
      setStore('sidebar', 'full');
    }
  });

  createEffect(() => {
    const theme = store.theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });

  createEffect(() => {
    const sidebar = store.sidebar;
    document.documentElement.setAttribute('data-sidebar-state', sidebar);
    localStorage.setItem('sidebar', sidebar);
  });

  createEffect(() => {
    const headerMenuToggled = store.headerMenuToggled;
    document.documentElement.setAttribute(
      'data-header-menu-toggled',
      String(headerMenuToggled),
    );
  });

  const value: UIContextValue = [
    store,
    {
      toggleHeaderMenu() {
        setStore('headerMenuToggled', (current) => {
          if (!current) {
            setStore('sidebar', 'full');
          }

          return !current;
        });
      },
      toggleSidebar() {
        setStore('sidebar', (current) => {
          if (current === 'full') {
            setStore('headerMenuToggled', false);
          }
          return current === 'full' ? 'mini' : 'full';
        });
      },
      toggleTheme() {
        setStore('theme', (current) => (current === 'dark' ? 'light' : 'dark'));
      },
    },
  ];

  return (
    <UIContext.Provider value={value}>{props.children}</UIContext.Provider>
  );
}
