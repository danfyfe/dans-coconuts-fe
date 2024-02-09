import { IHamburgerProps } from "@/interfaces/navigation";

const Hamburger = ({ onClick, open }: IHamburgerProps) => {
  return (
    <div className={`w-full flex justify-end`}>
      <button
        onClick={onClick}
        className={`
          rotate-90 h-10 w-10
          flex justify-center items-center
          text-2xl z-50
        `}>
        <span className={`${open ? 'rotate-45' : ''}`}>|</span>
        <span className={`${open ? 'hidden' : 'block'}`}>|</span>
        <span className={`${open ? '-rotate-45': ''}`}>|</span>
      </button>
    </div>
  )
};

export default Hamburger;
