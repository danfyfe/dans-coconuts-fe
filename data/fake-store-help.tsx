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
        It uses the <a href="https://fakestoreapi.com/" target="_blank" className="underline">fake store API</a>, which is great, but has some design restrictions due to the images (white background).
      </P>
      <P className="text-left">
        It serves as practice for building out e commerce platforms.
      </P>
      <P className="text-left">
        WIP - details to come
      </P>
      </>
    }
  }
};
