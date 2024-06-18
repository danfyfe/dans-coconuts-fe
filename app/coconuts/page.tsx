export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import CoconutsPageModal from '@/components/modals/modal-coconuts';
import AddCoconutForm from '@/components/coconuts/add-coconut-form';
import CoconutContainer from '@/components/coconuts/coconut-container';
import CoconutsTour from '@/components/tour-coconuts';
import { getCookie } from '../actions/utils';


export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = async () => {
  const cookie = await getCookie('coconuts-modal-opt-out')
  // console.log('hellp?', cookie)
  return (
    <>
      {
       !!cookie ? null : (
        <CoconutsPageModal />
       ) 
      }
      <CoconutsTour />
      <CoconutContainer />
      <AddCoconutForm />
    </>
  )
};

export default CoconutsPage;
