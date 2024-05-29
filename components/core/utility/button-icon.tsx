import { IButtonIconProps } from "@/interfaces/content";

const ButtonIcon = ({ type="button", children, className, onClick, ariaLabel, id, disabled } : IButtonIconProps) => {
  return (
    <button
      id={id}
      className={`
        self-center h-[40px] w-[40px] m-3
        flex items-center justify-center shadow-sm
        text-3xl bg-white bg-opacity-50 rounded-full
        ${className ? className : ''}
      `}
      disabled={disabled}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
};

export default ButtonIcon;
