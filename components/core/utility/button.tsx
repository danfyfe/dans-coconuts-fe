import { IButtonProps } from "@/interfaces/content";

const Button = ({ type="button", children, className, inverted=false, onClick }: IButtonProps) => {
  return (
    <button
      className={`
        rounded
        px-10
        border-2
        border-black
        min-w-[4rem]
        min-h-[3rem]
        font-roboto
        ${inverted ? '' : ''}
        ${className ? className : ''}
      `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
};

export default Button;
