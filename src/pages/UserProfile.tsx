import { HiOutlinePencilSquare, HiOutlineXMark } from 'solid-icons/hi';

import { Breadcrumb, Dialog } from '#ui/components';

import Owner from '#ui/assets/images/user/owner.jpg';

const Page = () => {
  let personalInfoEditorDialogRef: HTMLDialogElement | undefined;
  let addressEditorDialogRef: HTMLDialogElement | undefined;

  return (
    <>
      <Breadcrumb pageName="User Profile" />

      <Dialog ref={personalInfoEditorDialogRef}>
        <div class="modal-box no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-base-100 p-4 lg:p-11">
          <button
            type="button"
            class="absolute right-5 top-5 z-999 flex h-11 w-11 items-center justify-center rounded-full text-base-content/60 hover:bg-base-content/10 hover:text-base-content"
            onClick={() => personalInfoEditorDialogRef?.close()}
          >
            <HiOutlineXMark size={24} />
          </button>
          <div class="px-2 pr-14">
            <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p class="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form class="flex flex-col">
            <div class="custom-scrollbar h-[450px] overflow-y-auto px-2">
              <div>
                <h5 class="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Social Links
                </h5>

                <div class="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Facebook
                    </label>
                    <input
                      type="url"
                      value="https://facebook.com/PimjoHQ"
                      class="input w-full"
                    />
                  </div>

                  <div>
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      X.com
                    </label>
                    <input
                      type="url"
                      value="https://x.com/PimjoHQ"
                      class="input w-full"
                    />
                  </div>

                  <div>
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Linkedin
                    </label>
                    <input
                      type="url"
                      value="https://linkedin.com/PimjoHQ"
                      class="input w-full"
                    />
                  </div>

                  <div>
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Instagram
                    </label>
                    <input
                      type="url"
                      value="https://instagram.com/PimjoHQ"
                      class="input w-full"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-7">
                <h5 class="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div class="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div class="col-span-2 lg:col-span-1">
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      First Name
                    </label>
                    <input type="text" value="Musharof" class="input w-full" />
                  </div>

                  <div class="col-span-2 lg:col-span-1">
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Last Name
                    </label>
                    <input type="text" value="Chowdhury" class="input w-full" />
                  </div>

                  <div class="col-span-2 lg:col-span-1">
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      value="randomuser@pimjo.com"
                      class="input w-full"
                    />
                  </div>

                  <div class="col-span-2 lg:col-span-1">
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      value="+09 363 398 46"
                      class="input w-full"
                    />
                  </div>

                  <div class="col-span-2">
                    <label
                      for=""
                      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Bio
                    </label>
                    <input
                      type="text"
                      value="Team Manager"
                      class="input w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <button
                type="button"
                class="btn btn-soft"
                onClick={() => personalInfoEditorDialogRef?.close()}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => personalInfoEditorDialogRef?.close()}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Dialog>

      <Dialog ref={addressEditorDialogRef}>
        <div class="modal-box no-scrollbar relative flex w-full max-w-[700px] flex-col overflow-y-auto rounded-3xl p-6 bg-base-100 lg:p-11">
          <button
            type="button"
            class="absolute right-5 top-5 z-999 flex h-11 w-11 items-center justify-center rounded-full text-base-content/60 hover:bg-base-content/10 hover:text-base-content"
            onClick={() => addressEditorDialogRef?.close()}
          >
            <HiOutlineXMark size={24} />
          </button>

          <div class="px-2 pr-14">
            <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Address
            </h4>
            <p class="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form class="flex flex-col">
            <div class="px-2 overflow-y-auto custom-scrollbar">
              <div class="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <label
                    for=""
                    class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    value="United States"
                    class="input w-full"
                  />
                </div>

                <div>
                  <label
                    for=""
                    class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    City/State
                  </label>
                  <input
                    type="text"
                    value="Arizona, United States"
                    class="input w-full"
                  />
                </div>

                <div>
                  <label
                    for=""
                    class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Postal Code
                  </label>
                  <input type="text" value="ERT 2489" class="input w-full" />
                </div>

                <div>
                  <label
                    for=""
                    class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    TAX ID
                  </label>
                  <input type="text" value="AS4568384" class="input w-full" />
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 mt-6 lg:justify-end">
              <button
                type="button"
                class="btn btn-soft"
                onClick={() => addressEditorDialogRef?.close()}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => addressEditorDialogRef?.close()}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Dialog>

      <div class="rounded-2xl border border-base-content/20 bg-base-100 overflow-hidden">
        <div class="px-5 py-4 sm:px-6 sm:py-5">
          <h3 class="text-base font-medium">User Profile</h3>
        </div>

        <div class="px-5 pb-5">
          <div class="p-5 mb-6 border border-base-content/10 rounded-2xl lg:p-6">
            <div class="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div class="flex flex-col items-center w-full gap-6 xl:flex-row">
                <div class="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
                  <img src={Owner} alt="user" />
                </div>
                <div class="order-3 xl:order-2">
                  <h4 class="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                    John Wick
                  </h4>
                  <div class="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Team Manager
                    </p>
                    <div class="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block" />
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Arizona, United States
                    </p>
                  </div>
                </div>
                <div class="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
                  <button
                    type="button"
                    class="btn btn-outline h-11 w-11 p-0 rounded-full! border-base-content/20 hover:bg-base-300 dark:hover:bg-base-content/5 text-base-content/75"
                  >
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path
                        d="M11.6666 11.2503H13.7499L14.5833 7.91699H11.6666V6.25033C11.6666 5.39251 11.6666 4.58366 13.3333 4.58366H14.5833V1.78374C14.3118 1.7477 13.2858 1.66699 12.2023 1.66699C9.94025 1.66699 8.33325 3.04771 8.33325 5.58342V7.91699H5.83325V11.2503H8.33325V18.3337H11.6666V11.2503Z"
                        fill=""
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline h-11 w-11 p-0 rounded-full! border-base-content/20 hover:bg-base-300 dark:hover:bg-base-content/5 text-base-content/75"
                  >
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path
                        d="M15.1708 1.875H17.9274L11.9049 8.75833L18.9899 18.125H13.4424L9.09742 12.4442L4.12578 18.125H1.36745L7.80912 10.7625L1.01245 1.875H6.70078L10.6283 7.0675L15.1708 1.875ZM14.2033 16.475H15.7308L5.87078 3.43833H4.23162L14.2033 16.475Z"
                        fill=""
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline h-11 w-11 p-0 rounded-full! border-base-content/20 hover:bg-base-300 dark:hover:bg-base-content/5 text-base-content/75"
                  >
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Linked In</title>
                      <path
                        d="M5.78381 4.16645C5.78351 4.84504 5.37181 5.45569 4.74286 5.71045C4.11391 5.96521 3.39331 5.81321 2.92083 5.32613C2.44836 4.83904 2.31837 4.11413 2.59216 3.49323C2.86596 2.87233 3.48886 2.47942 4.16715 2.49978C5.06804 2.52682 5.78422 3.26515 5.78381 4.16645ZM5.83381 7.06645H2.50048V17.4998H5.83381V7.06645ZM11.1005 7.06645H7.78381V17.4998H11.0672V12.0248C11.0672 8.97475 15.0422 8.69142 15.0422 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4505 5.94145 11.0672 8.46642L11.1005 7.06645Z"
                        fill=""
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline h-11 w-11 p-0 rounded-full! border-base-content/20 hover:bg-base-300 dark:hover:bg-base-content/5 text-base-content/75"
                  >
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path
                        d="M10.8567 1.66699C11.7946 1.66854 12.2698 1.67351 12.6805 1.68573L12.8422 1.69102C13.0291 1.69766 13.2134 1.70599 13.4357 1.71641C14.3224 1.75738 14.9273 1.89766 15.4586 2.10391C16.0078 2.31572 16.4717 2.60183 16.9349 3.06503C17.3974 3.52822 17.6836 3.99349 17.8961 4.54141C18.1016 5.07197 18.2419 5.67753 18.2836 6.56433C18.2935 6.78655 18.3015 6.97088 18.3081 7.15775L18.3133 7.31949C18.3255 7.73011 18.3311 8.20543 18.3328 9.1433L18.3335 9.76463C18.3336 9.84055 18.3336 9.91888 18.3336 9.99972L18.3335 10.2348L18.333 10.8562C18.3314 11.794 18.3265 12.2694 18.3142 12.68L18.3089 12.8417C18.3023 13.0286 18.294 13.213 18.2836 13.4351C18.2426 14.322 18.1016 14.9268 17.8961 15.458C17.6842 16.0074 17.3974 16.4713 16.9349 16.9345C16.4717 17.397 16.0057 17.6831 15.4586 17.8955C14.9273 18.1011 14.3224 18.2414 13.4357 18.2831C13.2134 18.293 13.0291 18.3011 12.8422 18.3076L12.6805 18.3128C12.2698 18.3251 11.7946 18.3306 10.8567 18.3324L10.2353 18.333C10.1594 18.333 10.0811 18.333 10.0002 18.333H9.76516L9.14375 18.3325C8.20591 18.331 7.7306 18.326 7.31997 18.3137L7.15824 18.3085C6.97136 18.3018 6.78703 18.2935 6.56481 18.2831C5.67801 18.2421 5.07384 18.1011 4.5419 17.8955C3.99328 17.6838 3.5287 17.397 3.06551 16.9345C2.60231 16.4713 2.3169 16.0053 2.1044 15.458C1.89815 14.9268 1.75856 14.322 1.7169 13.4351C1.707 13.213 1.69892 13.0286 1.69238 12.8417L1.68714 12.68C1.67495 12.2694 1.66939 11.794 1.66759 10.8562L1.66748 9.1433C1.66903 8.20543 1.67399 7.73011 1.68621 7.31949L1.69151 7.15775C1.69815 6.97088 1.70648 6.78655 1.7169 6.56433C1.75786 5.67683 1.89815 5.07266 2.1044 4.54141C2.3162 3.9928 2.60231 3.52822 3.06551 3.06503C3.5287 2.60183 3.99398 2.31641 4.5419 2.10391C5.07315 1.89766 5.67731 1.75808 6.56481 1.71641C6.78703 1.70652 6.97136 1.69844 7.15824 1.6919L7.31997 1.68666C7.7306 1.67446 8.20591 1.6689 9.14375 1.6671L10.8567 1.66699ZM10.0002 5.83308C7.69781 5.83308 5.83356 7.69935 5.83356 9.99972C5.83356 12.3021 7.69984 14.1664 10.0002 14.1664C12.3027 14.1664 14.1669 12.3001 14.1669 9.99972C14.1669 7.69732 12.3006 5.83308 10.0002 5.83308ZM10.0002 7.49974C11.381 7.49974 12.5002 8.61863 12.5002 9.99972C12.5002 11.3805 11.3813 12.4997 10.0002 12.4997C8.6195 12.4997 7.50023 11.3809 7.50023 9.99972C7.50023 8.61897 8.61908 7.49974 10.0002 7.49974ZM14.3752 4.58308C13.8008 4.58308 13.3336 5.04967 13.3336 5.62403C13.3336 6.19841 13.8002 6.66572 14.3752 6.66572C14.9496 6.66572 15.4169 6.19913 15.4169 5.62403C15.4169 5.04967 14.9488 4.58236 14.3752 4.58308Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-outline rounded-full! border-base-content/20 hover:bg-base-300 dark:hover:bg-base-content/5"
                onClick={() => personalInfoEditorDialogRef?.showModal()}
              >
                <HiOutlinePencilSquare size={18} />
                Edit
              </button>
            </div>
          </div>

          <div class="p-5 mb-6 border border-base-content/10 rounded-2xl lg:p-6">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h4 class="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h4>

                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      First Name
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      John
                    </p>
                  </div>

                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Last Name
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      Wick
                    </p>
                  </div>

                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Email address
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      johnwick@example.com
                    </p>
                  </div>

                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      +09 363 398 46
                    </p>
                  </div>

                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Bio
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      Team Manager
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-outline rounded-full! border-base-content/20 hover:bg-base-300 dark:hover:bg-base-content/5"
                onClick={() => personalInfoEditorDialogRef?.showModal()}
              >
                <HiOutlinePencilSquare size={18} />
                Edit
              </button>
            </div>
          </div>

          <div class="p-5 border border-base-content/10 rounded-2xl lg:p-6">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h4 class="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
                  Address
                </h4>

                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Country
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      United States
                    </p>
                  </div>

                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      City/State
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      New York, United States
                    </p>
                  </div>

                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Postal Code
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      ERT 2489
                    </p>
                  </div>

                  <div>
                    <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      TAX ID
                    </p>
                    <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                      AS4568384
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-outline rounded-full! border-base-content/20 hover:bg-base-300 dark:hover:bg-base-content/5"
                onClick={() => addressEditorDialogRef?.showModal()}
              >
                <HiOutlinePencilSquare size={18} />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
