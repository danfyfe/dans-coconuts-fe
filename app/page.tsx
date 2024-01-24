import LandscapeContainer from '@/components/containers/landscape-container';
import { Metadata } from 'next';
import Loading from './loading';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: '...',
}
 

export default function HomePage() {
  return (
      <>
        <LandscapeContainer />
      </>
    )
  };
