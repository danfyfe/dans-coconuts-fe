import { ITextAreaProps } from "@/interfaces/content";

const TextArea = ({ type="text", name, className, value, onChange, label='', id, placeholder }: ITextAreaProps) => {
  return (
    <fieldset className={`${className ? className : ''}`}>
      {
        label ? (
          <>
            <legend className="font-roboto">{label}</legend>
            <label className="hidden" htmlFor={id}>{label}</label>
          </>
        ) : null
      }
      <textarea
        className={`
          rounded
          px-2
          border-2
          border-coconut_brown
          w-full
          min-h-[10rem]
          mb-2
        `}
        placeholder={placeholder}
        aria-label={`${name}`}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </fieldset>
  )
};

export default TextArea;
