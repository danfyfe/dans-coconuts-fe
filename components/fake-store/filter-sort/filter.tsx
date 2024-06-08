import H3 from "@/components/core/typography/H3";
import P from "@/components/core/typography/P";
import { Accordion, AccordionContent, AccordionItem } from "@/components/core/utility/accordion";
import Button from "@/components/core/utility/button";
import { FAKE_STORE_PRODUCT_FILTER_KEYS, FAKE_STORE_PRODUCT_FILTER_VALUES } from "@/context/fake-store/values";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import AccContClient from "./accordion-cont-client";

const Filter = ({ }) => {
  const filters = FAKE_STORE_PRODUCT_FILTER_KEYS;
  return (
    <div>
      <Accordion type="single" collapsible className="">
        <H3>Filter</H3>
        {
          filters.map((filter, index) => {
            return (
                <AccordionItem className="border-coconut_brown pb-2" key={`product-filter-${index}`} value={`product-filter-${index}`}>
                  <AccordionTrigger>
                    {filter}
                  </AccordionTrigger>
                  <AccContClient items={FAKE_STORE_PRODUCT_FILTER_VALUES[filter]} />
                </AccordionItem>
            )
          })
        }
      </Accordion>
    </div>
  )
};

export default Filter;
