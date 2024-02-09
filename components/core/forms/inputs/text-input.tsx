import { ITextInputProps } from "@/interfaces/content";
import { useRouter } from "next/navigation";
import setCookie from "@/lib/setCookie";

const TextInput = ({ type, name, className, value, onChange, label='' }: ITextInputProps) => {
  return (
    <fieldset className={`${className ? className : ''}`}>
      {
        label ? (
          <legend className="font-roboto">{label}</legend>
        ) : null
      }
      <input
        className={`
          rounded
          px-10
          border-2
          border-black
          min-w-[4rem]
          min-h-[3rem]
        `}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  )
};

export default TextInput;
