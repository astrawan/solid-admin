import { useNavigate } from '@solidjs/router';
import _404Dark from '#ui/assets/images/error/404-dark.svg';
import _404 from '#ui/assets/images/error/404.svg';

import { ROUTE_PATH } from '#ui/constants';

const Page = () => {
  const navigate = useNavigate();

  return (
    <div class="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
      {/*
      <include src="./partials/common-grid-shape.html"></include>
      */}

      <div class="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 class="mb-8 text-title-md font-bold text-7xl">ERROR</h1>

        <img src={_404} alt="404" />

        <p class="mb-6 mt-10 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
          We can’t seem to find the page you are looking for!
        </p>

        <button
          type="button"
          class="btn btn-outline btn-primary"
          onClick={() => navigate(ROUTE_PATH.index)}
        >
          Back to Home Page
        </button>
      </div>
      <p class="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; 2025 - SolidAdmin
      </p>
    </div>
  );
};

export default Page;
