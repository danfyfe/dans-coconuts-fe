'use client'
import { ITextInputProps } from "@/interfaces/content";
import { ChangeEvent, useState } from "react";


const TextInput = ({ type="text", name, className, value, onChange, label='', id, placeholder, required }: ITextInputProps) => {
  const [error, setError] = useState<string>('');

  const validate = (value: string): string => {
    if (required && !value) {
      return 'This field is required';
    }
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        onChange={handleChange}
      />
    </fieldset>
  )
};

export default TextInput;
