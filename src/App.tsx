import type { JSX } from 'solid-js';

import { MainLayout } from '#ui/layouts';

const App = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return <MainLayout>{props.children}</MainLayout>;
};

export default App;
