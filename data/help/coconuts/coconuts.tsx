import P from "@/components/core/typography/P";
import { ActiveHelpCategoryContent } from "@/context/HelpProvider";

export const COCONUTS_HELP: ActiveHelpCategoryContent = {
  'topic-title': 'Coconut',
  'topic-titles': ['Coconut'],
  'topic-content': {
    'Coconut': {
      title: 'Coconut',
      content:
      <>
      <P className="text-left">
        A coconut can be used to send a message to other users.
      </P>
      <P className="text-left">
        Once sent, a coconut will drop onto the beach. Clicking this coconut will display the message.
      </P>
      <P className="text-left">
        The coconut can be dragged and dropped around the beach. Its position will be saved for the next visit.
      </P>
      <div className="!text-left mt-2">
        <P>How to:</P>
        <ul>
          <li>1: Click the plus button on the coconuts page</li>
          <li>2: Search for a user to send to</li>
          <li>3: Give it a title</li>
          <li>4: Write a message</li>
          <li>5: Send </li>
        </ul>
      </div>
      <P className="text-left text-xs mt-2">*The message display uses shadcn&apos;s Popover component.</P>
      </>
    }
  }
}