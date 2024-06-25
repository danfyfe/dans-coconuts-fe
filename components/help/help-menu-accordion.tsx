import { TopicContent } from "@/context/HelpProvider";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "../core/utility/accordion";
import P from "../core/typography/P";

const HelpMenuAccordion = ({ titles, content }: { titles: string[]; content: TopicContent }) => {
  return (
    <>
    {
      titles.length > 0 && content ? (
        <Accordion type="single" collapsible className="w-full">
          {
            titles.map((title, index) => {
              const data = content?.[title];
              return (
                <AccordionItem key={`${title}-${index}`} value={`${title}-${index}`} className="no-underline">
                  <AccordionTrigger>{content[title].title}</AccordionTrigger>
                  <AccordionContent>{content[title].content}</AccordionContent>
                </AccordionItem>
              )
            })
          }
        </Accordion>
      ) : null
    }
    <P className="text-right text-xs mt-2">*This help menu display uses shadcn&apos;s Accordion component. </P>
    </>
  )
};

export default HelpMenuAccordion;
