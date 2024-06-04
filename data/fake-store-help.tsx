import P from "@/components/core/typography/P";
import { ActiveHelpCategoryContent } from "@/context/HelpProvider";

export const FAKE_STORE_HELP: ActiveHelpCategoryContent = {
  'topic-title': 'Fake Store',
  'topic-titles': ['Fake Store'],
  'topic-content': {
    'Fake Store': {
      title: 'Fake Store',
      content:
      <>
      <P className="text-left">
        This is a fake store.
      </P>
      <P className="text-left">
        It uses the <a href="https://fakestoreapi.com/" target="_blank" className="underline">fake store API</a>.
      </P>
      <P className="text-left">
        WIP
      </P>
      <P className="text-left text-xs mt-2">*This help menu display uses shadcn&apos;s Accordion component.</P>
      </>
    }
  }
};
