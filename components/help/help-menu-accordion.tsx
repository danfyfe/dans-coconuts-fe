import { TopicContent } from "@/context/HelpProvider";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "../core/presentational/accordion";

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
    </>
  )
};

export default HelpMenuAccordion;
