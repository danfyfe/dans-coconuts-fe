import HomePageModal from '@/components/modals/modal-home';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...'
}
 

const HomePage = async () => {
  const cookie = cookies().get('homepage-modal-opt-out');
  return (
    <>
    {
      !!cookie ? null : (
        <HomePageModal />
      )
    }
    </>
  )
};

export default HomePage;
