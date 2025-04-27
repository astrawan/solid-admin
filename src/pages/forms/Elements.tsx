import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineExclamationCircle,
  HiOutlineEye,
} from 'solid-icons/hi';

import { TbCopy, TbMail } from 'solid-icons/tb';

import { Breadcrumb } from '#ui/components';

const Page = () => {
  return (
    <>
      <Breadcrumb pageName="Form Elements" />

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div class="space-y-6">
          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium">Default Inputs</h3>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-1"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Input
                </label>
                <input name="input-1-1" type="text" class="input w-full" />
              </div>

              <div>
                <label
                  for="input-1-2"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Input with Placeholder
                </label>
                <input
                  type="text"
                  name="input-1-2"
                  placeholder="info@gmail.com"
                  class="input w-full"
                />
              </div>

              <div>
                <label
                  for="input-1-3"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Select Input
                </label>
                <select class="select w-full">
                  <option disabled selected>
                    Pick a browser
                  </option>
                  <option>Chrome</option>
                  <option>FireFox</option>
                  <option>Safari</option>
                </select>
              </div>

              <div>
                <label
                  for="input-1-4"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Password Input
                </label>
                <label class="input w-full">
                  <input type="password" placeholder="Enter your password" />
                  <HiOutlineEye size={18} />
                </label>
              </div>

              <div>
                <label
                  for="input-1-5"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Date Picker Input
                </label>

                <input
                  name="input-1-5"
                  type="date"
                  placeholder="Select date"
                  class="input w-full"
                />
              </div>

              <div>
                <label
                  for="input-1-6"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Time Select Input
                </label>
                <label class="input w-full">
                  <input type="time" placeholder="12:00 AM" />
                  <HiOutlineClock size={18} />
                </label>
              </div>

              <div>
                <label
                  for="input-1-7"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Input with Payment
                </label>

                <label class="input w-full">
                  <div class="border-r-1 border-base-content/20 py-2 pr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Master Card</title>
                      <circle cx="6.25" cy="10" r="5.625" fill="#E80B26" />
                      <circle cx="13.75" cy="10" r="5.625" fill="#F59D31" />
                      <path
                        d="M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z"
                        fill="#FC6020"
                      />
                    </svg>
                  </div>
                  <input type="text" placeholder="Card number" />
                </label>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium">Select Inputs</h3>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-3"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Select Input
                </label>
                <select class="select w-full">
                  <option disabled selected>
                    Pick a browser
                  </option>
                  <option>Chrome</option>
                  <option>FireFox</option>
                  <option>Safari</option>
                </select>
              </div>

              <div>
                <label
                  for="input-1-3"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Multi Select Options (Not Implemented)
                </label>
                <select class="select w-full" disabled>
                  <option disabled selected>
                    Pick a browser
                  </option>
                  <option>Chrome</option>
                  <option>FireFox</option>
                  <option>Safari</option>
                </select>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium">Textarea input field</h3>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-1"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Description
                </label>
                <textarea
                  class="textarea w-full"
                  placeholder="Enter a description"
                  rows={6}
                />
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-2"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Description
                </label>
                <textarea
                  class="textarea w-full"
                  disabled
                  placeholder="Enter a description"
                  rows={6}
                />
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-2"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Description
                </label>
                <textarea
                  aria-invalid="true"
                  class="textarea validator validator:user-invalid w-full"
                  onLoad={(evt) => console.debug('evt:', evt)}
                  placeholder="Enter a description"
                  required
                  rows={6}
                />
                <p class="validator-hint">
                  Please enter a message in the textarea
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium">Input States</h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Validation styles for error, success and disabled states on form
                controls.
              </p>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-1"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Email
                </label>
                <label class="input input-error validator w-full">
                  <input
                    type="email"
                    placeholder="Enter a description"
                    readOnly
                    value="demoemail"
                  />
                  <HiOutlineExclamationCircle class="text-error" size={18} />
                </label>
                <p class="validator-hint text-error visible!">
                  This is an error message.
                </p>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-2"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Email
                </label>
                <label class="input input-success validator w-full">
                  <input
                    type="email"
                    class=""
                    placeholder="Enter a description"
                    readOnly
                    value="demoemail@example.com"
                  />
                  <HiOutlineCheckCircle class="text-success" size={18} />
                </label>
                <p class="validator-success-hint text-success visible!">
                  This is an success message.
                </p>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-3"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="input w-full"
                  disabled
                  placeholder="Enter a description"
                  value="demoemail@example.com"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
                Input Group
              </h3>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-1"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Email
                </label>
                <label class="input w-full">
                  <div class="border-r-1 border-base-content/20 py-2 pr-3 text-base-content/60">
                    <TbMail size={20} />
                  </div>
                  <input type="email" placeholder="demoemail@example.com" />
                </label>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-2"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Phone
                </label>
                <div class="join w-full">
                  <select class="select join-item max-w-[64px]">
                    <option selected value="US">
                      US
                    </option>
                    <option value="GB">GB</option>
                    <option value="CA">CA</option>
                    <option value="AU">AU</option>
                  </select>
                  <input
                    class="input join-item grow"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-3"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Phone
                </label>
                <div class="join w-full">
                  <input
                    class="input join-item grow"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                  <select class="select join-item max-w-[64px]">
                    <option selected value="US">
                      US
                    </option>
                    <option value="GB">GB</option>
                    <option value="CA">CA</option>
                    <option value="AU">AU</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-1"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  URL
                </label>
                <label class="input w-full">
                  <div class="border-r-1 border-base-content/20 py-2 pr-3 text-base-content/60">
                    <span>http://</span>
                  </div>
                  <input type="email" placeholder="www.example.com" />
                </label>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-1"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Website
                </label>
                <label class="input w-full">
                  <input type="email" value="www.example.com" />
                  <button
                    type="button"
                    class="border-l-1 border-base-content/20 py-2 pl-3 flex gap-2"
                    onClick={(evt) => {
                      const child = evt.currentTarget.querySelector('span');
                      if (child) {
                        child.textContent = 'Copied';
                        setTimeout(() => {
                          child.textContent = 'Copy';
                        }, 2000);
                      }
                    }}
                  >
                    <TbCopy size={20} />
                    <span>Copy</span>
                  </button>
                </label>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
                File Input
              </h3>
            </div>

            <div class="space-y-6 border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800">
              <div>
                <label
                  for="input-1-1"
                  class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Upload file
                </label>
                <input type="file" class="file-input w-full" />
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
                Checkboxes
              </h3>
            </div>

            <div class="border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800 flex flex-wrap gap-5">
              <label class="label">
                <input type="checkbox" class="checkbox checkbox-primary" />
                Default
              </label>
              <label class="label">
                <input
                  type="checkbox"
                  checked
                  class="checkbox checkbox-primary"
                />
                Checked
              </label>
              <label class="label">
                <input
                  type="checkbox"
                  checked
                  class="checkbox checkbox-primary"
                  disabled
                />
                Disabled
              </label>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
                Radio Buttons
              </h3>
            </div>

            <div class="border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800 flex flex-wrap gap-5">
              <label class="label">
                <input type="radio" class="radio radio-primary" />
                Default
              </label>
              <label class="label">
                <input type="radio" checked class="radio radio-secondary" />
                Secondary
              </label>
              <label class="label">
                <input
                  type="radio"
                  checked
                  class="radio radio-secondary"
                  disabled
                />
                Disabled Secondary
              </label>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
                Toggle switch input
              </h3>
            </div>

            <div class="border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800 flex flex-wrap gap-5">
              <label class="label">
                <input type="checkbox" class="toggle toggle-primary" />
                Default
              </label>
              <label class="label">
                <input type="checkbox" checked class="toggle toggle-primary" />
                Checked
              </label>
              <label class="label">
                <input type="checkbox" class="toggle toggle-primary" disabled />
                Disabled
              </label>
            </div>

            <div class="border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800 flex flex-wrap gap-5">
              <label class="label">
                <input type="checkbox" class="toggle" />
                Default
              </label>
              <label class="label">
                <input type="checkbox" checked class="toggle" />
                Checked
              </label>
              <label class="label">
                <input type="checkbox" class="toggle" disabled />
                Disabled
              </label>
            </div>
          </div>

          <div class="rounded-2xl border border-base-content/20">
            <div class="px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
                Dropzone
              </h3>
            </div>

            <div class="border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800 flex flex-wrap gap-5">
              <span class="text-base-content/60 italic">
                Not implemented yet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
