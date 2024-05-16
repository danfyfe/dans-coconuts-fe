import { IButtonProps } from "@/interfaces/content";

const Button = ({ type="button", children, className, inverted=false, onClick, asLink=false, id, ariaLabel }: IButtonProps) => {
  return (
    <button
      id={id}
      className={`
        ${!asLink ? `
          rounded
          px-10
          border-2
          border-coconut_brown
          min-w-[4rem]
          min-h-[3rem]
        ` : ``
        }
        font-roboto
        ${inverted ? '' : ''}
        ${className ? className : ''}
      `}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
    >
      {children}
    </button>
  )
};

export default Button;
