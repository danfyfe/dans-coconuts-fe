import LandscapeContainer from '@/components/core/containers/landscape-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = () => (
  <LandscapeContainer></LandscapeContainer>
);

export default CoconutsPage;
