import { FaSolidChevronLeft, FaSolidChevronRight } from 'solid-icons/fa';
import { Breadcrumb } from '#ui/components';

import User01 from '#ui/assets/images/user/user-01.jpg';
import User02 from '#ui/assets/images/user/user-02.jpg';
import User03 from '#ui/assets/images/user/user-03.jpg';

const Page = () => {
  return (
    <>
      <Breadcrumb pageName="Basic Tables" />

      <div class="rounded-2xl border border-base-content/20 bg-base-100 overflow-hidden">
        <div class="px-5 py-4 sm:px-6 sm:py-5">
          <h3 class="text-base font-medium">Basic Table 1</h3>
        </div>

        <div class="p-5 border-t border-base-content/20 sm:p-6">
          <div class="overflow-x-auto rounded-box border border-base-content/15 bg-base-100">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <div class="flex gap-2 items-center">
                      <div class="avatar">
                        <div class="w-8 rounded-full">
                          <img src={User01} alt="User Avatar 01" />
                        </div>
                      </div>
                      <span>Cy Ganderton</span>
                    </div>
                  </td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <div class="badge badge-soft badge-info">Blue</div>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    <div class="flex gap-2 items-center">
                      <div class="avatar">
                        <div class="w-8 rounded-full">
                          <img src={User02} alt="User Avatar 01" />
                        </div>
                      </div>
                      <span>Hart Hagerty</span>
                    </div>
                  </td>
                  <td>Desktop Support Technician</td>
                  <td>
                    <div class="badge badge-soft badge-secondary">Purple</div>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>
                    <div class="flex gap-2 items-center">
                      <div class="avatar">
                        <div class="w-8 rounded-full">
                          <img src={User03} alt="User Avatar 01" />
                        </div>
                      </div>
                      <span>Brice Swyre</span>
                    </div>
                  </td>
                  <td>Tax Accountant</td>
                  <td>
                    <div class="badge badge-soft badge-error">Red</div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan={4}>
                    <div class="flex max-sm:flex-col gap-4 items-center justify-center">
                      <div class="flex">
                        <span>1 - 15/500</span>
                      </div>
                      <div class="flex-1 max-sm:hidden" />
                      <div class="flex gap-4 items-center justify-center">
                        <label for="recordPerPage">Record per page</label>
                        <select name="recordPerPage" class="select" value={25}>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                      </div>
                      <div class="join">
                        <button type="button" class="join-item btn">
                          <FaSolidChevronLeft size={12} />
                        </button>
                        <button
                          type="button"
                          class="join-item btn max-md:hidden"
                        >
                          1
                        </button>
                        <button
                          type="button"
                          class="join-item btn max-md:hidden"
                        >
                          2
                        </button>
                        <button
                          type="button"
                          class="join-item btn btn-disabled max-md:hidden"
                        >
                          ...
                        </button>
                        <button
                          type="button"
                          class="join-item btn max-md:hidden"
                        >
                          99
                        </button>
                        <button
                          type="button"
                          class="join-item btn max-md:hidden"
                        >
                          100
                        </button>
                        <button type="button" class="join-item btn">
                          <FaSolidChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
