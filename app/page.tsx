import HomeTour from '@/components/tour-home';
import HomePageModal from '@/components/modals/modal-home';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...'
}
 

const HomePage = async () => {
  const cookie = cookies().get('home-modal-opt-out');
  return (
    <>
      <HomePageModal />
      <HomeTour />
    </>
  )
};

export default HomePage;
