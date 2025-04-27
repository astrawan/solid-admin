import { type JSX, Show, createEffect } from 'solid-js';

import { A } from '@solidjs/router';

import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineBars3CenterLeft,
  HiOutlineBell,
  HiOutlineChevronDown,
  HiOutlineCog6Tooth,
  HiOutlineEllipsisHorizontal,
  HiOutlineInformationCircle,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUserCircle,
  HiOutlineXMark,
  HiSolidMagnifyingGlass,
} from 'solid-icons/hi';

import LogoDark from '#ui/assets/images/logo/logo-dark.svg';
import Logo from '#ui/assets/images/logo/logo.svg';

import UserOwner from '#ui/assets/images/user/owner.jpg';
import User02 from '#ui/assets/images/user/user-02.jpg';
import User03 from '#ui/assets/images/user/user-03.jpg';
import User04 from '#ui/assets/images/user/user-04.jpg';
import User05 from '#ui/assets/images/user/user-05.jpg';

import { ROUTE_PATH } from '#ui/constants';

import { useUI } from '#ui/hooks';

function Header(_props: JSX.HTMLAttributes<HTMLElement>) {
  const [UIState, UIActions] = useUI();

  createEffect(() => {
    console.debug('UIState.sidebar:', UIState.sidebar);
  });

  return (
    <header class="header sticky top-0 z-99999 flex w-full bg-base-100 border-base-content/20 lg:border-b">
      <div class="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
        <div class="flex w-full items-center justify-between gap-2 border-b border-base-content/20 px-3 py-3 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            aria-label="Sidebar Toggle"
            type="button"
            class="z-99999 flex h-10 w-10 items-center justify-center rounded-lg border-base-content/20 text-base-content/50 lg:h-11 lg:w-11 lg:border hover:bg-base-content/5 hover:text-base-content sidebar-mini:lg:bg-transparent sidebar-mini:dark:lg:bg-transparent sidebar-mini:bg-base-content/10"
            onClick={() => {
              UIActions.toggleSidebar();
            }}
          >
            <HiOutlineBars3CenterLeft
              class="hidden fill-current lg:block"
              size={20}
            />
            <HiOutlineBars3CenterLeft
              class="fill-current lg:hidden sidebar-full:block sidebar-full:lg:hidden sidebar-mini:hidden"
              size={20}
            />
            <HiOutlineXMark
              class="fill-current text-primary sidebar-full:hidden sidebar-mini:block sidebar-mini:lg:hidden"
              size={20}
            />
          </button>

          <a href="index.html" class="lg:hidden">
            <img class="dark:hidden" src={Logo} alt="Logo" />
            <img class="hidden dark:block" src={LogoDark} alt="Logo" />
          </a>

          <button
            type="button"
            class="z-99999 flex h-10 w-10 items-center justify-center rounded-lg text-base-content/50 hover:bg-base-content/5 lg:hidden header-menu-toggled:text-primary header-menu-toggled:bg-base-content/5"
            onClick={UIActions.toggleHeaderMenu}
          >
            <HiOutlineEllipsisHorizontal class="fill-current" size={24} />
          </button>

          <div class="hidden lg:block">
            <form>
              <div class="relative">
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <HiSolidMagnifyingGlass
                    class="text-base-content/50"
                    size={20}
                  />
                </span>
                <input
                  type="text"
                  placeholder="Search or type command..."
                  id="search-input"
                  class="shadow-theme-xs focus:border-base-content/40 h-11 w-full rounded-lg border border-base-content/20 dark:bg-base-content/5 py-2.5 pr-14 pl-12 text-sm text-base-content placeholder:text-base-content/20 focus:outline-hidden xl:w-[430px]"
                />
                <button
                  id="search-button"
                  class="absolute top-1/2 right-2.5 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-base-content/50 border-base-content/30"
                  type="button"
                >
                  <span> ⌘ </span>
                  <span> K </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="shadow-theme-md w-full items-center justify-between gap-4 px-5 py-4 lg:flex lg:justify-end lg:px-0 lg:shadow-none hidden header-menu-toggled:flex max-lg:header-menu-toggled:border-b max-lg:header-menu-toggled:border-base-content/20">
          <div class="2xsm:gap-3 flex items-center gap-2">
            <button
              aria-label="Theme Toggle"
              type="button"
              class="relative flex h-11 w-11 items-center justify-center rounded-full border border-base-content/20 text-base-content/50 hover:bg-base-content/5 hover:text-base-content"
              onClick={UIActions.toggleTheme}
            >
              <Show when={UIState.theme === 'light'}>
                <HiOutlineMoon size={20} />
              </Show>
              <Show when={UIState.theme === 'dark'}>
                <HiOutlineSun size={20} />
              </Show>
            </button>

            <div
              class="relative"
              x-data="{ dropdownOpen: false, notifying: true }"
            >
              <button
                aria-label="Notifications"
                type="button"
                class="relative flex h-11 w-11 items-center justify-center rounded-full border border-base-content/20 text-base-content/50 hover:bg-base-content/5 hover:text-base-content"
              >
                <span class="absolute top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-orange-400 flex">
                  <span class="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                </span>
                <HiOutlineBell size={20} />
              </button>

              <div
                x-show="dropdownOpen"
                class="shadow-theme-lg dark:bg-gray-dark absolute -right-[240px] mt-[17px] flex h-[480px] w-[350px] flex-col rounded-2xl border border-base-content/20 bg-white p-3 sm:w-[361px] lg:right-0"
                style="display: none;"
              >
                <div class="mb-3 flex items-center justify-between border-b border-base-content/20 pb-3">
                  <h5 class="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Notification
                  </h5>

                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400"
                  >
                    <HiOutlineBell size={24} />
                  </button>
                </div>

                <ul class="custom-scrollbar flex h-auto flex-col overflow-y-auto">
                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content/20 p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User02}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-success-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Terry Franci
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>5 min ago</span>
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content/20 p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User03}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-success-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Alena Franci
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>8 min ago</span>
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content/20 p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User04}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-success-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Jocelyn Kenter
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>15 min ago</span>
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content/20 p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User05}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-error-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Brandon Philips
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>1 hr ago</span>
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content/20 p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User02}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-success-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Terry Franci
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>5 min ago</span>
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content/20 p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User03}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-success-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Alena Franci
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>8 min ago</span>
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content/20 p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User04}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-success-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Jocelyn Kenter
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>15 min ago</span>
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex gap-3 rounded-lg border-b border-base-content p-3 px-4.5 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                      href="/"
                    >
                      <span class="relative z-1 block h-10 w-full max-w-10 rounded-full">
                        <img
                          src={User05}
                          alt="User"
                          class="overflow-hidden rounded-full"
                        />
                        <span class="bg-error-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900" />
                      </span>

                      <span class="block">
                        <span class="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Brandon Philips
                          </span>
                          requests permission to change
                          <span class="font-medium text-gray-800 dark:text-white/90">
                            Project - Nganter App
                          </span>
                        </span>

                        <span class="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <span>Project</span>
                          <span class="h-1 w-1 rounded-full bg-gray-400" />
                          <span>1 hr ago</span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>

                <a
                  href="/"
                  class="text-theme-sm shadow-theme-xs mt-3 flex justify-center rounded-lg border border-gray-300 bg-white p-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-base-content/20 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                >
                  View All Notification
                </a>
              </div>
            </div>
          </div>

          <div class="dropdown dropdown-end">
            <button
              type="button"
              class="flex items-center text-gray-700 dark:text-gray-400"
              tabindex="0"
            >
              <span class="mr-3 h-11 w-11 overflow-hidden rounded-full">
                <img src={UserOwner} alt="User" />
              </span>

              <span class="text-theme-sm mr-1 block font-medium">
                John Wick
              </span>

              <HiOutlineChevronDown size={18} />
            </button>
            <div
              tabindex="0"
              class="dropdown-content bg-base-100 shadow border rounded-box border-base-content/20 p-5 mt-4 w-[256px]"
            >
              <div class="p-2">
                <span class="text-theme-sm block font-medium text-gray-700 dark:text-gray-400">
                  John Wick
                </span>
                <span class="text-theme-xs mt-0.5 block text-gray-500 dark:text-gray-400">
                  johnwick@example.com
                </span>
              </div>
              <ul class="menu bg-base-100 z-1 w-full p-2">
                <li>
                  <A href={ROUTE_PATH.userProfile}>
                    <HiOutlineUserCircle size={24} />
                    Edit profile
                  </A>
                </li>
                <li>
                  <A href="/">
                    <HiOutlineCog6Tooth size={24} />
                    Account settings
                  </A>
                </li>
                <li>
                  <A href="/">
                    <HiOutlineInformationCircle size={24} />
                    Support
                  </A>
                </li>
                <li class="menu-divider-horizontal" />
                <li>
                  <A href={ROUTE_PATH.signIn}>
                    <HiOutlineArrowRightOnRectangle size={24} />
                    Sign on
                  </A>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
