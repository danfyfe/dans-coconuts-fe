import CoconutContainer from '@/components/coconuts/coconut-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...'
}
 

const HomePage = () => (
  <CoconutContainer />
);

export default HomePage;
