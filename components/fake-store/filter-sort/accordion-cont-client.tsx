'use client'
import { AccordionContent } from "@/components/core/utility/accordion";
import Button from "@/components/core/utility/button";
import P from "@/components/core/typography/P";
import { IFakeStoreFilterValueTypes } from "@/context/fake-store/values";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

const createParam = (type: 'filter' | 'sort', params: string[] | undefined) => {
  if (!params) return '';
  return params.reduce((acc, curr) => {
    return acc + curr + '&';
  }, `${type}=`)
};

const AccContClient = ({ items, type }: { items: IFakeStoreFilterValueTypes[]; type: 'filter' | 'sort' }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  
  const handleClick = (val: string) => {
    const encodedVal = encodeURIComponent(val);
    const filterParams = params?.getAll('filter');
    const sortParams = params?.getAll('filter');
    const filters = createParam('filter', filterParams);
    // console.log(filters)
    // router.replace(`/fake-store?`)
    // add sort or filter to product listing
    // replace URL
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
                    onClick={() => handleClick(val)}
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
