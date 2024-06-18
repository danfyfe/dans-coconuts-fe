import { Metadata } from 'next';
import { cookies } from 'next/headers';
import CoconutsPageModal from '@/components/modals/modal-coconuts';
import AddCoconutForm from '@/components/coconuts/add-coconut-form';
import CoconutContainer from '@/components/coconuts/coconut-container';
import CoconutsTour from '@/components/tour-coconuts';


export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = async () => {
  const cookie = cookies().get('coconuts-modal-opt-out');
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
