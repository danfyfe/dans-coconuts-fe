export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import CoconutsPageModal from '@/components/modals/modal-coconuts';
import AddCoconutForm from '@/components/coconuts/add-coconut-form';
import CoconutContainer from '@/components/coconuts/coconut-container';
import CoconutsTour from '@/components/tour-coconuts';


export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = () => {
  return (
    <>
      <CoconutsPageModal />
      <CoconutsTour />
      <CoconutContainer />
      <AddCoconutForm />
    </>
  )
};

export default CoconutsPage;
