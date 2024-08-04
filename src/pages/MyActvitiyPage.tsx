import MyActivityCardHeader from '@/components/myactivity/MyActivityCardHeader';
import MyActivityCardList from '@/components/myactivity/MyActivityCardList';

const MyActivityPage = () => {
  return (
    <section className="flex flex-col w-full max-w-[50rem] items-start">
      <MyActivityCardHeader />
      <MyActivityCardList />
    </section>
  );
};

export default MyActivityPage;