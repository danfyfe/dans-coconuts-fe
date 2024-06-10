import { FaStar } from "react-icons/fa";

const Ratings = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  )
};

export default Ratings;
