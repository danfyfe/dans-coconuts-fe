'use client'
import { ISearchInputProps } from "@/interfaces/content";
import { useState, useEffect } from "react";


const SearchInput = ({ name, className, label='', id, placeholder, required, indexName }: ISearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<string[]>([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  useEffect(() => {
    // make call to Apollo search index
    const searchItUp = async () => {
      const response = await fetch(`/api/search?search=${searchTerm}`);
      return response;
    };

    if (searchTerm) {
      console.log('updated! ',searchTerm)
      searchItUp();
    }
  }, [searchTerm, results]);

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
      {
        results.length > 0 ? (
          <div className="absolute bg-sand_day w-[calc(100%+1rem)]
            left-1/2 -translate-x-1/2 border-[1px] border-coconut_brown
            rounded p-2 pr-1 drop-shadow-lg
          ">
            <div className="max-h-72 overflow-auto">
              {
                results.map((result, index) => {
                  return (
                    <div key={`coconut-user-search-result-${index}`}>{result}</div>
                  )
                })
              }
            </div>
          </div>

        ) : null
      }
    </div>
  )
};

export default SearchInput;
