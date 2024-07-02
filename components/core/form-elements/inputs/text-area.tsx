'use client'
import { ITextAreaProps } from "@/interfaces/content";
import { ChangeEvent, useState } from "react";

const TextArea = ({ type="text", name, className, value, onChange, label='', id, placeholder, required }: ITextAreaProps) => {
  const [error, setError] = useState<string>('');

  const validate = (value: string): string => {
    if (required && !value) {
      return 'This field is required';
    }
    return '';
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const errorMessage = validate(value);
    setError(errorMessage);
    if (onChange) onChange(e);
  };

  return (
    <fieldset className={`${className ? className : ''}`}>
      <div className="relative">
        {
          label ? (
            <>
              <legend className="font-roboto">{label}</legend>
              <label className="hidden" htmlFor={id}>{label}</label>
            </>
          ) : null
        }
        {error && <span className={` text-red-700 absolute top-1/2 -translate-y-1/2 right-0 text-sm`}>{error}</span>}
      </div>
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
        onChange={handleChange}
      ></textarea>
    </fieldset>
  )
};

export default TextArea;
