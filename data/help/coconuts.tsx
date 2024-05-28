import P from "@/components/core/typography/P";
import { ActiveHelpCategoryContent } from "@/context/HelpProvider";

export const COCONUTS_HELP: ActiveHelpCategoryContent = {
  'topic-title': 'Coconuts',
  'topic-titles': ['Coconut'],
  'topic-content': {
    'Coconut': {
      title: 'Coconut',
      content:
      <>
      <P className="text left">
        A coconut is an open message to a whoever you send it to.
      </P>
      <P>
        It's just a you-have-no-choice added chat, really.
      </P>
      </>
    }
  }
}