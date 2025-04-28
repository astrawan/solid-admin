import { stringJoin } from '#ui/utils';

export const ROUTE_PATH_DASHBOARD = '/dashboard';
export const ROUTE_PATH_DEFAULT = '/default';
export const ROUTE_PATH_ERROR = '/error';
export const ROUTE_PATH_ERROR_404 = '/404';
export const ROUTE_PATH_FORMS = '/forms';
export const ROUTE_PATH_TABLES = '/tables';
export const ROUTE_PATH_BASIC_TABLES = '/basic';
export const ROUTE_PATH_OPEN_LIBRARY_TABLES = '/open-library';

export const ROUTE_PATH = {
  root: '/',
  index: stringJoin(ROUTE_PATH_DASHBOARD, ROUTE_PATH_DEFAULT),
  calendar: '/calendar',
  error: {
    root: ROUTE_PATH_ERROR,
    _404: stringJoin(ROUTE_PATH_ERROR, ROUTE_PATH_ERROR_404),
  },
  dashboard: {
    root: ROUTE_PATH_DASHBOARD,
    default: stringJoin(ROUTE_PATH_DASHBOARD, ROUTE_PATH_DEFAULT),
  },
  forms: {
    root: ROUTE_PATH_FORMS,
    elements: stringJoin(ROUTE_PATH_FORMS, '/elements'),
  },
  signIn: '/signin',
  signUp: '/signup',
  tables: {
    root: ROUTE_PATH_TABLES,
    basic: stringJoin(ROUTE_PATH_TABLES, ROUTE_PATH_BASIC_TABLES),
    openLibrary: stringJoin(ROUTE_PATH_TABLES, ROUTE_PATH_OPEN_LIBRARY_TABLES),
  },
  userProfile: '/user-profile',
};
