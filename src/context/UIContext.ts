import { createContext } from 'solid-js';

export type UISiderbarState = 'full' | 'mini';
export type UIThemeState = 'dark' | 'light';

export type UIContextValue = [
  { headerMenuToggled: boolean; sidebar: UISiderbarState; theme: UIThemeState },
  {
    toggleHeaderMenu: () => void;
    toggleSidebar: () => void;
    toggleTheme: () => void;
  },
];

export const UIContext = createContext<UIContextValue>([
  {
    headerMenuToggled: false,
    sidebar: 'full',
    theme: 'light',
  },
  {
    toggleHeaderMenu: () => {},
    toggleSidebar: () => {},
    toggleTheme: () => {},
  },
]);
