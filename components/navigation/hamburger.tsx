import { HamburgerProps } from "@/interfaces/navigation";

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <button
      onClick={onClick}
      className="
        rotate-90 h-10 w-10
        flex justify-center items-center
        text-2xl z-50
      ">
      <span>|</span>
      <span>|</span>
      <span>|</span>
    </button>
  )
};

export default Hamburger