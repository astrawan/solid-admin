import {
  For,
  Show,
  Suspense,
  createEffect,
  createMemo,
  createResource,
  createSignal,
} from 'solid-js';
import { createStore } from 'solid-js/store';

import {
  HiSolidChevronDoubleLeft,
  HiSolidChevronDoubleRight,
  HiSolidChevronLeft,
  HiSolidChevronRight,
} from 'solid-icons/hi';

import { OpenLibraryApi } from '#ui/api';

import { Breadcrumb, Dialog } from '#ui/components';

const Page = () => {
  const [query, setQuery] = createSignal('the art of war');
  const [searchQuery, setSearchQuery] =
    createStore<OpenLibraryApi.ApiModels.SearchQueryRequest>({
      q: query(),
      offset: 0,
      limit: 5,
    });
  const [searchResource, { refetch: searchRefetch }] = createResource(
    searchQuery,
    OpenLibraryApi.ApiQuery.search,
  );

  const hasRecords = createMemo(() => {
    const data = searchResource()?.data;
    return data && data.docs.length > 0;
  });
  const offsetFirst = createMemo(() => {
    return 0;
  });
  const offsetPrev = createMemo(() => {
    const currentOffset = searchResource()?.data?.offset;
    if (currentOffset === 0) {
      return currentOffset;
    }

    return (currentOffset || 0) - (searchQuery.limit || 25);
  });
  const offsetNext = createMemo(() => {
    return (searchResource()?.data?.offset || 0) + (searchQuery.limit || 25);
  });
  const offsetLast = createMemo(() => {
    const total = searchResource()?.data?.num_found || 0;
    const limit = searchQuery.limit || 25;

    return Math.floor(total / limit) * limit;
  });

  createEffect(() => {
    setSearchQuery('q', query());
  });

  createEffect(() => {
    if (
      searchQuery.q !== undefined &&
      searchQuery.limit !== undefined &&
      searchQuery.offset !== undefined
    ) {
      searchRefetch();
    }
  });

  return (
    <>
      <Breadcrumb pageName="Open Library" />

      <div class="rounded-2xl border border-base-content/20 bg-base-100 overflow-hidden">
        <div class="px-5 py-4 sm:px-6 sm:py-5 flex gap-4 items-center">
          <h3 class="text-base font-medium flex-1">Book List</h3>
          <input
            class="input"
            placeholder="Search book"
            value={query()}
            onChange={(evt) => setQuery(evt.currentTarget.value)}
          />
        </div>

        <div class="p-5 border-t border-base-content/20 sm:p-6">
          <Suspense fallback={<span>Loading...</span>}>
            <div class="overflow-x-auto rounded-box border border-base-content/15 bg-base-100">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Author(s)</th>
                    <th>Language(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <For each={searchResource()?.data?.docs}>
                    {(item) => (
                      <tr>
                        <th>{item.key.replace('/works/', '')}</th>
                        <th>
                          {item.cover_i && (
                            <>
                              <button
                                type="button"
                                onClick={(evt) => {
                                  const parent = evt.currentTarget.parentNode;
                                  const dialog =
                                    parent?.querySelector('dialog');
                                  if (dialog) {
                                    dialog.showModal();
                                  }
                                }}
                              >
                                <img
                                  src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}
                                  alt={`${item.title} cover`}
                                />
                              </button>
                              <Dialog>
                                <div>
                                  <img
                                    src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
                                    alt={`${item.title} cover`}
                                  />
                                </div>
                              </Dialog>
                            </>
                          )}
                        </th>
                        <td>{item.title}</td>
                        <td>{item.author_name?.join(', ')}</td>
                        <td>{item.language?.join(', ')}</td>
                      </tr>
                    )}
                  </For>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan={5}>
                      <div class="flex max-sm:flex-col gap-4 items-center justify-center">
                        <div class="flex">
                          <Show
                            when={hasRecords()}
                            fallback={<span>No records</span>}
                          >
                            <span>
                              {(searchResource()?.data.offset || 0) + 1} -{' '}
                              {(searchResource()?.data.offset || 0) +
                                (searchResource()?.data.docs.length || 0)}
                              /{searchResource()?.data.num_found || 0}
                            </span>
                          </Show>
                        </div>
                        <div class="flex-1 max-sm:hidden" />
                        <div class="flex gap-4 items-center justify-center">
                          <label for="recordPerPage">Record per page</label>
                          <select
                            name="recordPerPage"
                            class="select"
                            value={searchQuery.limit ?? 25}
                            onChange={(evt) =>
                              setSearchQuery(
                                'limit',
                                Number.parseInt(evt.currentTarget.value, 10) ??
                                  25,
                              )
                            }
                          >
                            <option value={5}>5</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>
                        </div>
                        <div class="join">
                          <button
                            disabled={searchResource()?.data?.offset === 0}
                            type="button"
                            class="join-item btn"
                            onClick={() =>
                              setSearchQuery('offset', offsetFirst())
                            }
                          >
                            <HiSolidChevronDoubleLeft size={16} />
                          </button>
                          <button
                            disabled={searchResource()?.data?.offset === 0}
                            type="button"
                            class="join-item btn"
                            onClick={() =>
                              setSearchQuery('offset', offsetPrev())
                            }
                          >
                            <HiSolidChevronLeft size={16} />
                          </button>
                          <button
                            type="button"
                            class="join-item btn"
                            disabled={
                              searchResource()?.data.num_found ===
                              (searchResource()?.data.offset || 0) +
                                (searchResource()?.data.docs.length || 0)
                            }
                            onClick={() =>
                              setSearchQuery('offset', offsetNext())
                            }
                          >
                            <HiSolidChevronRight size={16} />
                          </button>
                          <button
                            type="button"
                            class="join-item btn"
                            disabled={
                              searchResource()?.data.num_found ===
                              (searchResource()?.data.offset || 0) +
                                (searchResource()?.data.docs.length || 0)
                            }
                            onClick={() =>
                              setSearchQuery('offset', offsetLast())
                            }
                          >
                            <HiSolidChevronDoubleRight size={16} />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Page;
