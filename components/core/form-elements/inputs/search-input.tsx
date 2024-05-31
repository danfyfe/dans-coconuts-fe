'use client'
import { ISearchInputProps } from "@/interfaces/content";
import { useState, useEffect } from "react";

const SearchInput = ({ name, className, label='', id, placeholder, required, indexName }: ISearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    // make call to Apollo search index
    if (searchTerm) {
      console.log('updated! ',searchTerm)
      results.push(searchTerm)
    }
  }, [searchTerm])

  return (
    <div className="relative">
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
            rounded px-2 border-2 border-coconut_brown
            w-full min-h-[3rem] mb-2
          `}
          required={required}
          placeholder={placeholder}
          aria-label={`${name}`}
          type="search"
          name={name}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </fieldset>
      <div className="absolute bg-sand_day w-[calc(100%+1rem)]
        left-1/2 -translate-x-1/2 border-[1px] border-coconut_brown
        rounded p-2 overflow-auto max-h-72
      ">
        {results.length > 0 ? (
          results.map((result, index) => {
            return (
              <div key={`coconut-user-search-result-${index}`}>{result}</div>
            )
          })
        ): null}
      </div>
    </div>
  )
};

export default SearchInput;
