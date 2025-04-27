import { type JSX, createMemo } from 'solid-js';

import { A, useLocation } from '@solidjs/router';

import {
  HiOutlineCalendar,
  HiOutlineChevronDown,
  HiOutlineDocumentDuplicate,
  HiOutlineEllipsisHorizontal,
  HiOutlineQueueList,
  HiOutlineSquares2x2,
  HiOutlineTableCells,
  HiOutlineUserCircle,
} from 'solid-icons/hi';

import LogoDark from '#ui/assets/images/logo/logo-dark.svg';
import LogoIcon from '#ui/assets/images/logo/logo-icon.svg';
import Logo from '#ui/assets/images/logo/logo.svg';

import { ROUTE_PATH } from '#ui/constants';

function Sidebar(_props: JSX.HTMLAttributes<HTMLElement>) {
  const location = useLocation();

  const pathname = createMemo(() => location.pathname);

  const menuGroupToggle: JSX.ButtonHTMLAttributes<HTMLButtonElement>['onClick'] =
    (evt) => {
      evt.preventDefault();
      const menuActive =
        evt.currentTarget.getAttribute('data-menu-active') === 'true';
      const parent = evt.currentTarget.parentElement;
      if (parent) {
        const menuToggled = parent.getAttribute('data-menu-toggled');
        parent.setAttribute(
          'data-menu-toggled',
          String((!menuToggled && !menuActive) || menuToggled === 'false'),
        );
      }
    };

  return (
    <aside class="sidebar fixed left-0 top-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-hidden bg-base-100 border-r border-base-content/20 px-5 lg:static lg:translate-x-0 sidebar-full:max-lg:-translate-x-full sidebar-mini:translate-x-0 sidebar-mini:lg:w-[90px]">
      {/* Header */}
      <div class="flex items-center gap-2 pt-8 sidebar-header pb-7 sidebar-full:justify-between sidebar-mini:justify-center">
        <a href="index.html">
          <span class="logo sidebar-mini:hidden">
            <img class="dark:hidden" src={Logo} alt="Logo" />
            <img class="hidden dark:block" src={LogoDark} alt="Logo" />
          </span>

          <img
            class="logo-icon sidebar-full:hidden sidebar-mini:lg:block"
            src={LogoIcon}
            alt="Logo"
          />
        </a>
      </div>

      <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav>
          <div>
            <h3 class="mb-4 text-xs uppercase leading-[20px] text-base-content/75">
              <span class="menu-group-title sidebar-mini:lg:hidden">MENU</span>
              <HiOutlineEllipsisHorizontal
                class="mx-auto fill-current menu-group-icon sidebar-full:hidden sidebar-mini:lg:block sidebar-mini:hidden"
                size={24}
              />
            </h3>

            <ul class="flex flex-col gap-4 mb-6">
              <li data-menu-toggled="false">
                <button
                  type="button"
                  data-menu-active={pathname().startsWith('/dashboard')}
                  class="menu-item group data-[menu-active=true]:menu-item-active data-[menu-active=false]:menu-item-inactive btn-wide"
                  onClick={menuGroupToggle}
                >
                  <HiOutlineSquares2x2 size={24} />

                  <span class="menu-item-text sidebar-mini:lg:hidden">
                    Dashboard
                  </span>

                  <HiOutlineChevronDown
                    class="menu-item-arrow sidebar-mini:lg:hidden transition-transform"
                    size={20}
                  />
                </button>

                <div class="menu-dropdown-wrapper overflow-hidden transform translate">
                  <ul class="flex flex-col gap-1 mt-2 menu-dropdown pl-9 sidebar-full:flex sidebar-mini:lg:hidden">
                    <li>
                      <A
                        data-menu-active={pathname().startsWith(
                          '/dashboard/default',
                        )}
                        href="/dashboard/default"
                        class="menu-dropdown-item group data-[menu-active=true]:menu-dropdown-item-active data-[menu-active=false]:menu-dropdown-item-inactive"
                      >
                        Default
                      </A>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <A
                  data-menu-active={pathname().startsWith('/calendar')}
                  href="/calendar"
                  class="menu-item group data-[menu-active=true]:menu-item-active data-[menu-active=false]:menu-item-inactive"
                >
                  <HiOutlineCalendar size={24} />

                  <span class="menu-item-text sidebar-mini:lg:hidden">
                    Calendar
                  </span>
                </A>
              </li>

              <li>
                <A
                  data-menu-active={pathname().startsWith('/user-profile')}
                  href="/user-profile"
                  class="menu-item group data-[menu-active=true]:menu-item-active data-[menu-active=false]:menu-item-inactive"
                >
                  <HiOutlineUserCircle size={24} />
                  <span class="menu-item-text sidebar-mini:lg:hidden">
                    User Profile
                  </span>
                </A>
              </li>
            </ul>

            <ul class="flex flex-col gap-4 mb-6">
              <li data-menu-toggled="false">
                <button
                  type="button"
                  data-menu-active={pathname() === ROUTE_PATH.forms.elements}
                  class="menu-item group data-[menu-active=true]:menu-item-active data-[menu-active=false]:menu-item-inactive btn-wide"
                  onClick={menuGroupToggle}
                >
                  <HiOutlineQueueList size={24} />

                  <span class="menu-item-text sidebar-mini:lg:hidden">
                    Forms
                  </span>

                  <HiOutlineChevronDown
                    class="menu-item-arrow sidebar-mini:lg:hidden transition-transform"
                    size={20}
                  />
                </button>

                <div class="menu-dropdown-wrapper overflow-hidden transform translate">
                  <ul class="flex flex-col gap-1 mt-2 menu-dropdown pl-9 sidebar-full:flex sidebar-mini:lg:hidden">
                    <li>
                      <A
                        data-menu-active={
                          pathname() === ROUTE_PATH.forms.elements
                        }
                        href={ROUTE_PATH.forms.elements}
                        class="menu-dropdown-item group data-[menu-active=true]:menu-dropdown-item-active data-[menu-active=false]:menu-dropdown-item-inactive"
                      >
                        Form Elements
                      </A>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul class="flex flex-col gap-4 mb-6">
              <li data-menu-toggled="false">
                <button
                  type="button"
                  data-menu-active={pathname() === ROUTE_PATH.signIn}
                  class="menu-item group data-[menu-active=true]:menu-item-active data-[menu-active=false]:menu-item-inactive btn-wide"
                  onClick={menuGroupToggle}
                >
                  <HiOutlineTableCells size={24} />

                  <span class="menu-item-text sidebar-mini:lg:hidden">
                    Tables
                  </span>

                  <HiOutlineChevronDown
                    class="menu-item-arrow sidebar-mini:lg:hidden transition-transform"
                    size={20}
                  />
                </button>

                <div class="menu-dropdown-wrapper overflow-hidden transform translate">
                  <ul class="flex flex-col gap-1 mt-2 menu-dropdown pl-9 sidebar-full:flex sidebar-mini:lg:hidden">
                    <li>
                      <A
                        data-menu-active={
                          pathname() === ROUTE_PATH.tables.basic
                        }
                        href={ROUTE_PATH.tables.basic}
                        class="menu-dropdown-item group data-[menu-active=true]:menu-dropdown-item-active data-[menu-active=false]:menu-dropdown-item-inactive"
                      >
                        Basic Tables
                      </A>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 text-xs uppercase leading-[20px] text-base-content/75">
              <span class="menu-group-title sidebar-mini:lg:hidden">
                OTHERS
              </span>
              <HiOutlineEllipsisHorizontal
                class="mx-auto fill-current menu-group-icon sidebar-full:hidden sidebar-mini:lg:block sidebar-mini:hidden"
                size={24}
              />
            </h3>

            <ul class="flex flex-col gap-4 mb-6">
              <li data-menu-toggled="false">
                <button
                  type="button"
                  data-menu-active={pathname() === ROUTE_PATH.signIn}
                  class="menu-item group data-[menu-active=true]:menu-item-active data-[menu-active=false]:menu-item-inactive btn-wide"
                  onClick={menuGroupToggle}
                >
                  <HiOutlineDocumentDuplicate size={24} />

                  <span class="menu-item-text sidebar-mini:lg:hidden">
                    Pages
                  </span>

                  <HiOutlineChevronDown
                    class="menu-item-arrow sidebar-mini:lg:hidden transition-transform"
                    size={20}
                  />
                </button>

                <div class="menu-dropdown-wrapper overflow-hidden transform translate">
                  <ul class="flex flex-col gap-1 mt-2 menu-dropdown pl-9 sidebar-full:flex sidebar-mini:lg:hidden">
                    <li>
                      <A
                        data-menu-active={pathname() === ROUTE_PATH.signIn}
                        href={ROUTE_PATH.signIn}
                        class="menu-dropdown-item group data-[menu-active=true]:menu-dropdown-item-active data-[menu-active=false]:menu-dropdown-item-inactive"
                      >
                        Sign In
                      </A>
                    </li>
                  </ul>
                </div>

                <div class="menu-dropdown-wrapper overflow-hidden transform translate">
                  <ul class="flex flex-col gap-1 mt-2 menu-dropdown pl-9 sidebar-full:flex sidebar-mini:lg:hidden">
                    <li>
                      <A
                        data-menu-active={pathname() === ROUTE_PATH.signUp}
                        href={ROUTE_PATH.signUp}
                        class="menu-dropdown-item group data-[menu-active=true]:menu-dropdown-item-active data-[menu-active=false]:menu-dropdown-item-inactive"
                      >
                        Sign Up
                      </A>
                    </li>
                  </ul>
                </div>

                <div class="menu-dropdown-wrapper overflow-hidden transform translate">
                  <ul class="flex flex-col gap-1 mt-2 menu-dropdown pl-9 sidebar-full:flex sidebar-mini:lg:hidden">
                    <li>
                      <A
                        data-menu-active={pathname() === ROUTE_PATH.error._404}
                        href={ROUTE_PATH.error._404}
                        class="menu-dropdown-item group data-[menu-active=true]:menu-dropdown-item-active data-[menu-active=false]:menu-dropdown-item-inactive"
                      >
                        404 Error
                      </A>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
