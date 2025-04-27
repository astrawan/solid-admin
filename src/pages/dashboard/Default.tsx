import { onCleanup, onMount } from 'solid-js';

import { FaSolidArrowDown, FaSolidArrowUp } from 'solid-icons/fa';

import {
  HiOutlineCube,
  HiOutlineEllipsisVertical,
  HiOutlineUsers,
} from 'solid-icons/hi';

const Page = () => {
  let dateInputRef: HTMLInputElement | undefined;

  onMount(() => {});

  onCleanup(() => {
    //
  });

  return (
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12 space-y-6 xl:col-span-7">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          <div class="rounded-2xl border border-base-content/20 bg-base-100 p-5">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-base-300 dark:bg-base-content/10">
              <HiOutlineUsers size={24} />
            </div>

            <div class="mt-5 flex items-end justify-between">
              <div>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Customers
                </span>
                <h4 class="mt-2 text-3xl font-bold text-gray-800 dark:text-white/90">
                  3,782
                </h4>
              </div>

              <span class="flex items-center gap-1 py-0.5 pl-2 pr-2.5 text-sm font-medium badge badge-soft badge-success">
                <FaSolidArrowUp class="fill-current" size={12} />
                11.01%
              </span>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20 bg-base-100 p-5 md:p-6">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-base-300 dark:bg-base-content/10">
              <HiOutlineCube size={24} />
            </div>

            <div class="mt-5 flex items-end justify-between">
              <div>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Orders
                </span>
                <h4 class="mt-2 text-3xl font-bold text-gray-800 dark:text-white/90">
                  5,359
                </h4>
              </div>

              <span class="flex items-center gap-1 py-0.5 pl-2 pr-2.5 text-sm font-medium badge badge-soft badge-error">
                <FaSolidArrowDown size={12} />
                9.05%
              </span>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl border border-base-content/20 bg-base-100 px-5 pt-5 sm:px-6 sm:pt-6">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
              Monthly Sales
            </h3>

            <div class="relative h-fit">
              <button
                type="button"
                class="text-gray-400 hover:text-gray-700 dark:hover:text-white"
              >
                <HiOutlineEllipsisVertical size={24} />
              </button>
            </div>
          </div>

          <div class="max-w-full overflow-x-auto custom-scrollbar">
            <div class="-ml-5 min-w-[650px] px-8 py-8 xl:min-w-full">
              <table class="charts-css column show-labels show-4-secondary-axes data-spacing-16">
                <caption> Column Example #13 </caption>
                <thead>
                  <tr>
                    <th scope="col">Month</th>
                    <th scope="col">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"> Jan </th>
                    <td style="--size: 0.2;" />
                  </tr>
                  <tr>
                    <th scope="row"> Feb </th>
                    <td style="--size: 0.4;" />
                  </tr>
                  <tr>
                    <th scope="row"> Mar </th>
                    <td style="--size: 0.6;" />
                  </tr>
                  <tr>
                    <th scope="row"> Apr </th>
                    <td style="--size: 0.8;" />
                  </tr>
                  <tr>
                    <th scope="row"> May </th>
                    <td style="--size: 1;" />
                  </tr>
                  <tr>
                    <th scope="row"> Jun </th>
                    <td style="--size: 1;" />
                  </tr>
                  <tr>
                    <th scope="row"> Jul </th>
                    <td style="--size: 1;" />
                  </tr>
                  <tr>
                    <th scope="row"> Aug </th>
                    <td style="--size: 1;" />
                  </tr>
                  <tr>
                    <th scope="row"> Sep </th>
                    <td style="--size: 1;" />
                  </tr>
                  <tr>
                    <th scope="row"> Oct </th>
                    <td style="--size: 1;" />
                  </tr>
                  <tr>
                    <th scope="row"> Nov </th>
                    <td style="--size: 1;" />
                  </tr>
                  <tr>
                    <th scope="row"> Dec </th>
                    <td style="--size: 1;" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12 xl:col-span-5">
        <div class="rounded-2xl border border-base-content/20 bg-base-content/5">
          <div class="shadow-default rounded-2xl px-5 pb-11 pt-5 sm:px-6 sm:pt-6 bg-base-100">
            <div class="flex justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
                  Monthly Target
                </h3>
                <p class="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
                  Target you’ve set for each month
                </p>
              </div>
              <div x-data="{openDropDown: false}" class="relative h-fit">
                <button
                  type="button"
                  class="text-gray-400 hover:text-gray-700 dark:hover:text-white"
                >
                  <HiOutlineEllipsisVertical size={24} />
                </button>
              </div>
            </div>
            <div class="relative">
              <div class="h-full px-4 py-4">
                <table class="charts-css pie max-h-[270px] max-w-[270px]">
                  <caption> Pie Example #1 </caption>
                  <tbody>
                    <tr>
                      <td style="--start: 0.0; --end: 0.2445;">
                        <span class="data">24.45%</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="--start: 0.2445; --end: 1.0; --color: rgba(0, 0, 255, 0.60);">
                        <span class="data">75.55%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p class="mx-auto mt-1.5 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
              You earn $3287 today, it's higher than last month. Keep up your
              good work!
            </p>
          </div>

          <div class="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
            <div>
              <p class="mb-1 text-center text-theme-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                Target
              </p>
              <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                $20K
                <FaSolidArrowDown class="text-red-500" size={16} />
              </p>
            </div>

            <div class="h-7 w-px bg-gray-200 dark:bg-gray-800" />

            <div>
              <p class="mb-1 text-center text-theme-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                Revenue
              </p>
              <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                $20K
                <FaSolidArrowUp class="text-green-500" size={16} />
              </p>
            </div>

            <div class="h-7 w-px bg-gray-200 dark:bg-gray-800" />

            <div>
              <p class="mb-1 text-center text-theme-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                Today
              </p>
              <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                $20K
                <FaSolidArrowUp class="text-green-500" size={16} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="rounded-2xl border border-base-content/20 bg-base-100 px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
          <div class="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
            <div class="w-full">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
                Statistics
              </h3>
              <p class="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                Target you’ve set for each month
              </p>
            </div>

            <div class="flex items-start w-full gap-3 sm:justify-end">
              <div class="join">
                <input
                  class="join-item btn"
                  type="radio"
                  name="options"
                  aria-label="Overview"
                  checked={true}
                />
                <input
                  class="join-item btn"
                  type="radio"
                  name="options"
                  aria-label="Sales"
                />
                <input
                  class="join-item btn"
                  type="radio"
                  name="options"
                  aria-label="Revenue"
                />
              </div>

              <div class="relative w-fit">
                <input
                  type="text"
                  class="input input-border h-10 w-[256px]"
                  id="cally1"
                  placeholder="Pick a date"
                  style="anchor-name:--cally1"
                  ref={dateInputRef}
                />
              </div>
            </div>
          </div>
          <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="charts-css area multiple hide-data show-labels show-5-secondary-axes">
              <caption> Area Example #8 </caption>
              <thead>
                <tr>
                  <th scope="col"> Month </th>
                  <th scope="col"> Progress 1 </th>
                  <th scope="col"> Progress 2 </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"> Jan </th>
                  <td style="--start: 0.7; --end: 0.8; --color: var(--color-primary);">
                    <span class="data"> 50 </span>
                  </td>
                  <td style="--start: 0.2; --end: 0.15;">
                    <span class="data"> 20 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Feb </th>
                  <td style="--start: 0.8; --end: 0.65; --color: var(--color-primary);">
                    <span class="data"> 80 </span>
                  </td>
                  <td style="--start: 0.15; --end: 0.25;">
                    <span class="data"> 50 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Mar </th>
                  <td style="--start: 0.65; --end: 0.6; --color: var(--color-primary);">
                    <span class="data"> 80 </span>
                  </td>
                  <td style="--start: 0.25; --end: 0.3;">
                    <span class="data"> 50 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Apr </th>
                  <td style="--start: 0.6; --end: 0.55; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.3; --end: 0.4;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> May </th>
                  <td style="--start: 0.55; --end: 0.6; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.4; --end: 0.35;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Jun </th>
                  <td style="--start: 0.6; --end: 0.55; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.35; --end: 0.4;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Jul </th>
                  <td style="--start: 0.55; --end: 0.6; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.4; --end: 0.35;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Aug </th>
                  <td style="--start: 0.6; --end: 0.65; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.35; --end: 0.3;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Sep </th>
                  <td style="--start: 0.65; --end: 0.7; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.3; --end: 0.25;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Oct </th>
                  <td style="--start: 0.7; --end: 0.68; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.25; --end: 0.25;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Nov </th>
                  <td style="--start: 0.68; --end: 0.75; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.25; --end: 0.35;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Dec </th>
                  <td style="--start: 0.75; --end: 0.85; --color: var(--color-primary);">
                    <span class="data"> 40 </span>
                  </td>
                  <td style="--start: 0.35; --end: 0.45;">
                    <span class="data"> 30 </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
