import CoconutContainer from '@/components/coconuts/coconut-container';
import CoconutTrashCan from '@/components/coconuts/coconut-trash-can';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = () => (
  <CoconutContainer />
);

export default CoconutsPage;
