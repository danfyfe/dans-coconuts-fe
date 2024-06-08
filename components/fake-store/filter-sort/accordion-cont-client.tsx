'use client'

import { AccordionContent } from "@/components/core/utility/accordion";
import Button from "@/components/core/utility/button";
import P from "@/components/core/typography/P";
import { IFakeStoreFilterValueTypes } from "@/context/fake-store/values";

const AccContClient = ({ items }: { items: IFakeStoreFilterValueTypes[]}) => {
  const handleClick = () => {

  };

  return (
    <>
      {
        items ? (
          <AccordionContent className="pl-2">
            {
              items?.map((val, index) => {
                return (
                  <Button
                    key={`filter-value-${val}-${index}`}
                    asLink
                    className="block"
                    onClick={handleClick}
                  >
                    {val}
                  </Button>
                )
              })
            }
          </AccordionContent>
      ) : (
        <AccordionContent className="pl-2">
            <P>No results</P>
        </AccordionContent>
      )
      }
    </>
  )

};

export default AccContClient;
