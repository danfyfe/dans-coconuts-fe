import { HamburgerProps } from "@/interfaces/navigation";

const Hamburger = ({ onClick, open }: HamburgerProps) => {
  return (
    <div className={`w-full flex justify-end`}>
      <button
        onClick={onClick}
        className={`
          rotate-90 h-10 w-10
          flex justify-center items-center
          text-2xl z-50
        `}>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </button>
    </div>
  )
};

export default Hamburger