import AddCoconutForm from '@/components/coconuts/add-coconut-form';
import CoconutContainer from '@/components/coconuts/coconut-container';
import { getUserData } from '../actions/users';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts",
  description: 'Just a beach...with coconuts'
}
 

const CoconutsPage = async () => {
  const userResp = await getUserData();
  const user = userResp.success ? userResp.user! : {};

  return (
    <>
      <CoconutContainer />
      <AddCoconutForm user={user} />
    </>
  )
};

export default CoconutsPage;
