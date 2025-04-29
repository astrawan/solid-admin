import { onCleanup, onMount } from 'solid-js';

import ApexCharts from 'apexcharts';

import flatpickr from 'flatpickr';

import { FaSolidArrowDown, FaSolidArrowUp } from 'solid-icons/fa';

import {
  HiOutlineCube,
  HiOutlineEllipsisVertical,
  HiOutlineUsers,
} from 'solid-icons/hi';

const Page = () => {
  let dateInputRef: HTMLInputElement | undefined;
  let flatpickrInstance: flatpickr.Instance | undefined;
  let chartOne: ApexCharts | undefined;
  let chartTwo: ApexCharts | undefined;
  let chartThree: ApexCharts | undefined;

  onMount(() => {
    const chartOneOptions = {
      series: [
        {
          name: 'Sales',
          data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
        },
      ],
      colors: ['#465fff'],
      chart: {
        fontFamily: 'Outfit, sans-serif',
        type: 'bar',
        height: 180,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '39%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontFamily: 'Outfit',

        markers: {
          radius: 99,
        },
      },
      yaxis: {
        title: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      fill: {
        opacity: 1,
      },

      tooltip: {
        x: {
          show: false,
        },
        y: {
          formatter: (val: string) => val,
        },
      },
    };

    const chartOneEl = document.querySelector('#chartOne');

    if (chartOneEl) {
      chartOne = new ApexCharts(chartOneEl, chartOneOptions);
      chartOne.render();
    }

    const chartTwoOptions = {
      series: [75.55],
      colors: ['#465FFF'],
      chart: {
        fontFamily: 'Outfit, sans-serif',
        type: 'radialBar',
        height: 330,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '80%',
          },
          track: {
            background: '#E4E7EC',
            strokeWidth: '100%',
            margin: 5, // margin is in pixels
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: '36px',
              fontWeight: '600',
              offsetY: 60,
              color: '#1D2939',
              formatter: (val: string) => `${val}%`,
            },
          },
        },
      },
      fill: {
        type: 'solid',
        colors: ['#465FFF'],
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Progress'],
    };

    const chartTwoEl = document.querySelector('#chartTwo');

    if (chartTwoEl) {
      chartTwo = new ApexCharts(chartTwoEl, chartTwoOptions);
      chartTwo.render();
    }

    const chartThreeOptions = {
      series: [
        {
          name: 'Sales',
          data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
        },
        {
          name: 'Revenue',
          data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
        },
      ],
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
      },
      colors: ['#465FFF', '#9CB9FF'],
      chart: {
        fontFamily: 'Outfit, sans-serif',
        height: 310,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0,
        },
      },
      stroke: {
        curve: 'straight',
        width: ['2', '2'],
      },

      markers: {
        size: 0,
      },
      labels: {
        show: false,
        position: 'top',
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy',
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: false,
      },
      yaxis: {
        title: {
          style: {
            fontSize: '0px',
          },
        },
      },
    };

    const chartThreeEl = document.querySelector('#chartThree');

    if (chartThreeEl) {
      chartThree = new ApexCharts(chartThreeEl, chartThreeOptions);
      chartThree.render();
    }

    if (dateInputRef) {
      flatpickrInstance = flatpickr(dateInputRef, { mode: 'range' });
    }
  });

  onCleanup(() => {
    chartOne?.destroy();
    chartTwo?.destroy();
    chartThree?.destroy();

    flatpickrInstance?.destroy();
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
              <div
                id="chartOne"
                class="-ml-5 h-full min-w-[650px] pl-2 xl:min-w-full"
              />
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
            <div class="relative max-h-[195px]">
              <div id="chartTwo" class="h-full" />
              <span class="absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-[85%] badge badge-soft badge-success">
                +10%
              </span>
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
            <div id="chartThree" class="-ml-4 min-w-[700px] pl-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
