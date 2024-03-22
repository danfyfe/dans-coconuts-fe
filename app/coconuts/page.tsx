import CoconutContainer from '@/components/coconuts/coconut-container';
import LandscapeContainer from '@/components/core/containers/landscape-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = () => (
  <LandscapeContainer>
    <CoconutContainer />
  </LandscapeContainer>
);

export default CoconutsPage;
