import { ReactElement } from "react";
import P from '@/components/core/typography/P';

export const NO_ENTITY: {
  [key: string]: {
    content: ReactElement
  }
} = {
  'organization': {
    content: <>
      <P>Hmmmm... it looks like you are not part of an organization.</P>
      <P>Click the plus sign in the heading to add or join one.</P>
    </>
  },
  'project': {
    content: <>
    <P>Hmmmm... it looks like you are not part of any projects.</P>
    <P>Click the plus sign in the heading to add or join one.</P>
  </>
  },
  'task': {
    content: <>
    <P>Hmmmm... it looks like you do not have any tasks.</P>
    <P>Click the plus sign in the heading to add or assign one.</P>
  </>
  }
};
