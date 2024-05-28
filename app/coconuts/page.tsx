import AddCoconutForm from '@/components/coconuts/add-coconut-form';
import CoconutContainer from '@/components/coconuts/coconut-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = () => (
  <>
    <CoconutContainer />
    <AddCoconutForm />
  </>
);

export default CoconutsPage;
