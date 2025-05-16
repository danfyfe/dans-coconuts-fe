import H3 from "@/components/core/typography/H3";
import { Accordion, AccordionContent, AccordionItem } from "@/components/core/utility/accordion";
import { FAKE_STORE_PRODUCT_FILTER_KEYS, FAKE_STORE_PRODUCT_FILTER_VALUES, IFakeStoreFilterValueTypes } from "@/context/fake-store/values";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import AccContClient from "./accordion-cont-client";

const Filter = ({ }) => {
  const filters = FAKE_STORE_PRODUCT_FILTER_KEYS;
  return (
    <div>
      <H3>Filter</H3>
      <>
        <Accordion type="single" collapsible className="w-full text-left">
          {
            filters.map((filter, index) => {
              const items = FAKE_STORE_PRODUCT_FILTER_VALUES[filter] as IFakeStoreFilterValueTypes[];
              return (
                  <AccordionItem className="border-coconut_brown pb-2" key={`product-filter-${index}`} value={`product-filter-${index}`}>
                    <AccordionTrigger>{filter}</AccordionTrigger>
                    <AccContClient items={items} type="filter" />
                  </AccordionItem>
              )
            })
          }
        </Accordion>
      </>
    </div>
  )
};

export default Filter;
