import { HiOutlineMoon, HiOutlineSun } from 'solid-icons/hi';
import { type JSX, Show } from 'solid-js';
import { useUI } from '#ui/hooks';

import LogoDark from '#ui/assets/images/logo/logo-dark.svg';
import ShapeGrid from '#ui/assets/images/shape/grid-01.svg';

function AuthLayout(props: JSX.HTMLAttributes<HTMLElement>) {
  const [UIState, UIActions] = useUI();

  return (
    <div class="relative p-6 bg-base-100 z-1 sm:p-0">
      <div class="relative flex flex-col justify-center w-full h-screen sm:p-0 lg:flex-row">
        <div class="flex flex-col flex-1 h-full overflow-auto pb-5 w-full lg:w-1/2">
          {props.children}
        </div>

        <div class="relative items-center hidden w-full h-full bg-info-content dark:bg-base-300 lg:grid lg:w-1/2">
          <div class="flex items-center justify-center z-1">
            <div class="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
              <img src={ShapeGrid} alt="grid" />
            </div>
            <div class="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
              <img src={ShapeGrid} alt="grid" />
            </div>

            <div class="flex flex-col items-center max-w-xs">
              <a href="index.html" class="block mb-4">
                <img src={LogoDark} alt="Logo" />
              </a>
              <p class="text-center text-gray-400 dark:text-white/60">
                Free and Open-Source Tailwind CSS Admin Dashboard Template
              </p>
            </div>
          </div>
        </div>
        <div class="fixed z-50 hidden bottom-6 right-6 sm:block">
          <button
            type="button"
            class="inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-primary/75 hover:bg-primary"
            onClick={UIActions.toggleTheme}
          >
            <Show when={UIState.theme === 'light'}>
              <HiOutlineMoon size={24} />
            </Show>
            <Show when={UIState.theme === 'dark'}>
              <HiOutlineSun size={24} />
            </Show>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
