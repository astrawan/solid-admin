import { Route, Router, useLocation, useNavigate } from '@solidjs/router';
import { type JSX, createEffect, createMemo, lazy } from 'solid-js';
import { render } from 'solid-js/web';

import '#ui/App.css';
import '@fontsource-variable/outfit';
import 'flatpickr/dist/flatpickr.css';

import { ROUTE_PATH } from '#ui/constants';
// import { useAuth } from '#ui/hooks';
import { AuthLayout } from '#ui/layouts';
import { AuthProvider, UIProvider } from '#ui/providers';

const App = lazy(() => import('#ui/App'));
const Calendar = lazy(() => import('#ui/pages/Calendar'));
const DefaultDashboard = lazy(() => import('#ui/pages/dashboard/Default'));
const Error404 = lazy(() => import('#ui/pages/error/404'));
const FormElements = lazy(() => import('#ui/pages/forms/Elements'));
const SignIn = lazy(() => import('#ui/pages/SignIn'));
const SignUp = lazy(() => import('#ui/pages/SignUp'));
const TableBasic = lazy(() => import('#ui/pages/tables/Basic'));
const TableOpenLibrary = lazy(() => import('#ui/pages/tables/OpenLibrary'));
const UserProfile = lazy(() => import('#ui/pages/UserProfile'));

function Protected(props: JSX.HTMLAttributes<HTMLElement>) {
  // const [AuthState] = useAuth();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const pathname = createMemo(() => location.pathname);

  createEffect(() => {
    // if (!AuthState.status) {
    //   navigate(ROUTE_PATH.signIn);
    // }
  });

  return <App>{props.children}</App>;
}

function Root(props: JSX.HTMLAttributes<HTMLElement>) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = createMemo(() => location.pathname);

  createEffect(() => {
    if (pathname() === '/') {
      navigate(ROUTE_PATH.index);
    }
  });

  return (
    <AuthProvider>
      <UIProvider>{props.children}</UIProvider>
    </AuthProvider>
  );
}

const root = document.getElementById('root');
if (root) {
  render(
    () => (
      <Router root={Root}>
        <Route path={ROUTE_PATH.root} component={Protected}>
          <Route path={ROUTE_PATH.calendar} component={Calendar} />
          <Route
            path={ROUTE_PATH.dashboard.default}
            component={DefaultDashboard}
          />
          <Route path={ROUTE_PATH.forms.elements} component={FormElements} />
          <Route path={ROUTE_PATH.userProfile} component={UserProfile} />
          <Route path={ROUTE_PATH.tables.basic} component={TableBasic} />
          <Route
            path={ROUTE_PATH.tables.openLibrary}
            component={TableOpenLibrary}
          />
        </Route>
        <Route path={ROUTE_PATH.error._404} component={Error404} />
        <Route path={ROUTE_PATH.root} component={AuthLayout}>
          <Route path={ROUTE_PATH.signIn} component={SignIn} />
          <Route path={ROUTE_PATH.signUp} component={SignUp} />
        </Route>
      </Router>
    ),
    root,
  );
}
