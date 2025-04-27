import type { JSX } from 'solid-js';

import { HiOutlineChevronRight } from 'solid-icons/hi';

interface BreadcrumbProps extends JSX.HTMLAttributes<HTMLElement> {
  pageName: string;
}

function Breadcrumb(props: BreadcrumbProps) {
  return (
    <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h2
        class="text-xl font-semibold text-gray-800 dark:text-white/90"
        x-text="pageName"
      >
        {props.pageName}
      </h2>

      <nav>
        <ol class="flex items-center gap-1.5">
          <li>
            <a
              class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              href="index.html"
            >
              Home
              <HiOutlineChevronRight size={16} />
            </a>
          </li>
          <li class="text-sm text-gray-800 dark:text-white/90">
            {props.pageName}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
