import Modal from '@/components/core/modal';
import HomePageModal from '@/components/modals/modal-home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...'
}
 

const HomePage = async () => {
  return (
    <>
      <HomePageModal />
    </>
  )
};

export default HomePage;
