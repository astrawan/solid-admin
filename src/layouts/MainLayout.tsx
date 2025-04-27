import type { JSX } from 'solid-js';

import { Header, Siderbar } from '#ui/components';
import { useUI } from '#ui/hooks';

function MainLayout({ children }: JSX.HTMLAttributes<HTMLElement>) {
  const [_, UIActions] = useUI();

  return (
    <div class="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Siderbar />
      <div class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          class="fixed w-full h-screen z-9 bg-base-content/50 sidebar-full:hidden sidebar-mini:block sidebar-mini:lg:hidden"
          onClick={UIActions.toggleSidebar}
        />
        <Header />
        <main>
          <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            {/* <div class="grid grid-cols-12 gap-4 md:gap-6"></div> */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
