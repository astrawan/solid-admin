import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'solid-icons/hi';

function Calendar() {
  return (
    <div class="lg:flex lg:h-full lg:flex-col">
      <header class="flex items-center justify-between border-b border-base-content/10 px-6 py-4 lg:flex-none">
        <h1 class="text-base font-semibold leading-6">
          <time datetime="2022-01">January 2022</time>
        </h1>
        <div class="flex items-center">
          <div class="join">
            <button class="join-item btn" type="button">
              <HiOutlineChevronLeft size={12} />
            </button>
            <button class="join-item btn" type="button">
              Today
            </button>
            <button class="join-item btn" type="button" name="options">
              <HiOutlineChevronRight size={12} />
            </button>
          </div>
          <div class="hidden md:ml-4 md:flex md:items-center">
            <select class="select" value="3">
              <option value="1">Day view</option>
              <option value="2">Week view</option>
              <option value="3">Month view</option>
              <option value="4">Year view</option>
            </select>
            <div class="divider divider-horizontal" />
            <button type="button" class="btn btn-primary">
              Add event
            </button>
          </div>
          <div class="relative ml-6 md:hidden">
            <button
              type="button"
              class="-mx-2 flex items-center rounded-full border border-transparent p-2"
              id="menu-0-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>
            </button>

            {/*
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                */}
            <div
              class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-0-button"
              tabindex="-1"
            >
              <div class="py-1">
                <a
                  href="/"
                  class="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-0"
                >
                  Create event
                </a>
              </div>
              <div class="py-1">
                <a
                  href="/"
                  class="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-1"
                >
                  Go to today
                </a>
              </div>
              <div class="py-1">
                <a
                  href="/"
                  class="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-2"
                >
                  Day view
                </a>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-3"
                >
                  Week view
                </a>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-4"
                >
                  Month view
                </a>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-5"
                >
                  Year view
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="border-b border-base-content/10 lg:flex lg:flex-auto lg:flex-col bg-base-content/10">
        <div class="grid grid-cols-7 gap-px border-b border-base-content/10 text-center text-xs font-semibold leading-6 lg:flex-none">
          <div class="flex justify-center py-2 bg-base-100">
            <span>M</span>
            <span class="sr-only sm:not-sr-only">on</span>
          </div>
          <div class="flex justify-center py-2 bg-base-100">
            <span>T</span>
            <span class="sr-only sm:not-sr-only">ue</span>
          </div>
          <div class="flex justify-center py-2 bg-base-100">
            <span>W</span>
            <span class="sr-only sm:not-sr-only">ed</span>
          </div>
          <div class="flex justify-center py-2 bg-base-100">
            <span>T</span>
            <span class="sr-only sm:not-sr-only">hu</span>
          </div>
          <div class="flex justify-center py-2 bg-base-100">
            <span>F</span>
            <span class="sr-only sm:not-sr-only">ri</span>
          </div>
          <div class="flex justify-center py-2 bg-base-100">
            <span>S</span>
            <span class="sr-only sm:not-sr-only">at</span>
          </div>
          <div class="flex justify-center py-2 bg-base-100">
            <span>S</span>
            <span class="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div class="flex text-xs leading-6 lg:flex-auto">
          <div class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {/*
                  Always include: "relative py-2 px-3"
                  Is current month, include: "bg-white"
                  Is not current month, include: "bg-gray-50"
                */}
            <div class="relative px-3 py-2 bg-base-200">
              {/*
                    Is today, include: "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                  */}
              <time datetime="2021-12-27">27</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2021-12-28">28</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2021-12-29">29</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2021-12-30">30</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2021-12-31">31</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-01">1</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-01">2</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-03">3</time>
              <ol class="mt-2">
                <li>
                  <a href="/" class="group flex">
                    <p class="flex-auto truncate font-medium group-hover:text-indigo-600">
                      Design review
                    </p>
                    <time
                      datetime="2022-01-03T10:00"
                      class="ml-3 hidden flex-none group-hover:text-indigo-600 xl:block"
                    >
                      10AM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="/" class="group flex">
                    <p class="flex-auto truncate font-medium group-hover:text-indigo-600">
                      Sales meeting
                    </p>
                    <time
                      datetime="2022-01-03T14:00"
                      class="ml-3 hidden flex-none group-hover:text-indigo-600 xl:block"
                    >
                      2PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-04">4</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-05">5</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-06">6</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-07">7</time>
              <ol class="mt-2">
                <li>
                  <a href="/" class="group flex">
                    <p class="flex-auto truncate font-medium group-hover:text-indigo-600">
                      Date night
                    </p>
                    <time
                      datetime="2022-01-08T18:00"
                      class="ml-3 hidden flex-none group-hover:text-indigo-600 xl:block"
                    >
                      6PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-08">8</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-09">9</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-10">10</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-11">11</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time
                datetime="2022-01-12"
                class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
              >
                12
              </time>
              <ol class="mt-2">
                <li>
                  <a href="/" class="group flex">
                    <p class="flex-auto truncate font-medium group-hover:text-indigo-600">
                      Sam's birthday party
                    </p>
                    <time
                      datetime="2022-01-25T14:00"
                      class="ml-3 hidden flex-none group-hover:text-indigo-600 xl:block"
                    >
                      2PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-13">13</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-14">14</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-15">15</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-16">16</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-17">17</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-18">18</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-19">19</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-20">20</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-21">21</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-22">22</time>
              <ol class="mt-2">
                <li>
                  <a href="/" class="group flex">
                    <p class="flex-auto truncate font-medium group-hover:text-indigo-600">
                      Maple syrup museum
                    </p>
                    <time
                      datetime="2022-01-22T15:00"
                      class="ml-3 hidden flex-none group-hover:text-indigo-600 xl:block"
                    >
                      3PM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="/" class="group flex">
                    <p class="flex-auto truncate font-medium group-hover:text-indigo-600">
                      Hockey game
                    </p>
                    <time
                      datetime="2022-01-22T19:00"
                      class="ml-3 hidden flex-none group-hover:text-indigo-600 xl:block"
                    >
                      7PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-23">23</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-24">24</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-25">25</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-26">26</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-27">27</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-28">28</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-29">29</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-30">30</time>
            </div>
            <div class="relative px-3 py-2 bg-base-100">
              <time datetime="2022-01-31">31</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2022-02-01">1</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2022-02-02">2</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2022-02-03">3</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2022-02-04">4</time>
              <ol class="mt-2">
                <li>
                  <a href="/" class="group flex">
                    <p class="flex-auto truncate font-medium group-hover:text-indigo-600">
                      Cinema with friends
                    </p>
                    <time
                      datetime="2022-02-04T21:00"
                      class="ml-3 hidden flex-none group-hover:text-indigo-600 xl:block"
                    >
                      9PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2022-02-05">5</time>
            </div>
            <div class="relative px-3 py-2 bg-base-200">
              <time datetime="2022-02-06">6</time>
            </div>
          </div>
          <div class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            {/*
                  Always include: "flex h-14 flex-col py-2 px-3 bg-base-100"
                  Is current month, include: "bg-white"
                  Is not current month, include: "bg-gray-50"
                  Is selected or is today, include: "font-semibold"
                  Is selected, include: "text-white"
                  Is not selected and is today, include: "text-indigo-600"
                */}
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              {/*
                    Always include: "ml-auto"
                    Is selected, include: "flex h-6 w-6 items-center justify-center rounded-full"
                    Is selected and is today, include: "bg-indigo-600"
                    Is selected and is not today, include: "bg-gray-900"
                  */}
              <time datetime="2021-12-27" class="ml-auto">
                27
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2021-12-28" class="ml-auto">
                28
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2021-12-29" class="ml-auto">
                29
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2021-12-30" class="ml-auto">
                30
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2021-12-31" class="ml-auto">
                31
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-01" class="ml-auto">
                1
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-02" class="ml-auto">
                2
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-03" class="ml-auto">
                3
              </time>
              <span class="sr-only">2 events</span>
              <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
              </span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-04" class="ml-auto">
                4
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-05" class="ml-auto">
                5
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-06" class="ml-auto">
                6
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-07" class="ml-auto">
                7
              </time>
              <span class="sr-only">1 event</span>
              <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
              </span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-08" class="ml-auto">
                8
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-09" class="ml-auto">
                9
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-10" class="ml-auto">
                10
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-11" class="ml-auto">
                11
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 font-semibold text-indigo-600 bg-base-100"
            >
              <time datetime="2022-01-12" class="ml-auto">
                12
              </time>
              <span class="sr-only">1 event</span>
              <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
              </span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-13" class="ml-auto">
                13
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-14" class="ml-auto">
                14
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-15" class="ml-auto">
                15
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-16" class="ml-auto">
                16
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-17" class="ml-auto">
                17
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-18" class="ml-auto">
                18
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-19" class="ml-auto">
                19
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-20" class="ml-auto">
                20
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-21" class="ml-auto">
                21
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 font-semibold text-white bg-base-100"
            >
              <time
                datetime="2022-01-22"
                class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900"
              >
                22
              </time>
              <span class="sr-only">2 events</span>
              <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
              </span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-23" class="ml-auto">
                23
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-24" class="ml-auto">
                24
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-25" class="ml-auto">
                25
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-26" class="ml-auto">
                26
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-27" class="ml-auto">
                27
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-28" class="ml-auto">
                28
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-29" class="ml-auto">
                29
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-30" class="ml-auto">
                30
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-100"
            >
              <time datetime="2022-01-31" class="ml-auto">
                31
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2022-02-01" class="ml-auto">
                1
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2022-02-02" class="ml-auto">
                2
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2022-02-03" class="ml-auto">
                3
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2022-02-04" class="ml-auto">
                4
              </time>
              <span class="sr-only">1 event</span>
              <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
              </span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2022-02-05" class="ml-auto">
                5
              </time>
              <span class="sr-only">0 events</span>
            </button>
            <button
              type="button"
              class="flex h-14 flex-col px-3 py-2 bg-base-200"
            >
              <time datetime="2022-02-06" class="ml-auto">
                6
              </time>
              <span class="sr-only">0 events</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
