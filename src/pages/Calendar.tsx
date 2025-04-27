import { Breadcrumb, Calendar } from '#ui/components';

const Page = () => {
  return (
    <>
      <Breadcrumb pageName="Calendar" />

      <div class="rounded-2xl border border-base-content/20 bg-base-100 overflow-hidden">
        <Calendar />
      </div>
    </>
  );
};

export default Page;
