import LandscapeContainer from '@/components/core/containers/landscape-container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...'
}
 

const HomePage = () => (
  <LandscapeContainer />
);

export default HomePage;
