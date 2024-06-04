import { ReactNode } from "react";

const ListingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-3 flex flex-col md:flex-row">
      {children}
    </div>
  )
};

export default ListingContainer;
