import { IButtonIconProps } from "@/interfaces/content";

const ButtonIcon = ({ type="button", children, className, onClick, ariaLabel } : IButtonIconProps) => {
  return (
    <button
      className={`${className ? className : ''}`}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
};

export default ButtonIcon;
