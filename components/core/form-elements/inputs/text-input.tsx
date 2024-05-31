import { ITextInputProps } from "@/interfaces/content";

const TextInput = ({ type="text", name, className, value, onChange, label='', id, placeholder, required }: ITextInputProps) => {
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
      <input
        className={`
          rounded
          px-2
          border-2
          border-coconut_brown
          w-full
          min-h-[3rem]
          mb-2
        `}
        required={required}
        placeholder={placeholder}
        aria-label={`${name}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  )
};

export default TextInput;
