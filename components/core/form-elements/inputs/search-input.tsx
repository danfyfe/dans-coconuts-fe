'use client'
import { ISearchInputProps } from "@/interfaces/content";
import { IUser } from "@/models/User";
import { useState, useEffect } from "react";
import { FaMinus } from "react-icons/fa";


const SearchInput = ({ name, className, label='', id, placeholder, required, indexName, handleSelection }: ISearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayResults, setDisplayResults] = useState<boolean>(false);
  const [chosenUsers, setChosenUsers] = useState<Partial<IUser>[]>([]);
  const [noneFound, setNoneFound] = useState<boolean>(false);
  const [results, setResults] = useState<Partial<IUser>[]>([]);
  
  useEffect(() => {
    // make call to Apollo search index
    const searchItUp = async () => {
      const response = await fetch(`/api/search?search=${searchTerm}`);
      return response;
    };

    if (searchTerm) {
      searchItUp().then((r) => r.json()).then((resp) => {
        if (resp.success) {
          if (resp.users.length === 0) {
            setNoneFound(true);
          } else {
            setNoneFound(false);
          }
          setResults(resp.users);
          setDisplayResults(true);
        }
      });
    }
  }, [searchTerm]);

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
        <div className="relative mb-2">
            <>
              {
                chosenUsers.length > 0 ? (
                  <>
                  {
                    chosenUsers.map((user, index) => {
                      return (
                        <button
                          key={`chosen-user-${index}`}
                          type="button"
                          className="
                            absolute px-2 bottom-1/2 translate-y-1/2
                            flex justify-center items-center bg-sand_day
                            ml-2
                          "
                          onClick={() => {
                            // currently we are only allowing one user to be selected
                            setChosenUsers([]);
                            setSearchTerm('');
                          }}
                        >
                          <span>{user.username}</span>
                          <FaMinus className="ml-1"/>
                        </button>
                      )
                    })
                  }
                  </>
                ): null
              }
            </>
            <input
              className={`
                rounded px-2 border-2 border-coconut_brown
                w-full min-h-[3rem]
              `}
              required={required}
              placeholder={placeholder}
              aria-label={`${name}`}
              type="search"
              name={name}
              value={searchTerm}
              disabled={chosenUsers.length > 0}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </fieldset>
      {
        noneFound && results.length === 0 ? (
          <div className="absolute bg-sand_day w-[calc(100%+1rem)]
            left-1/2 -translate-x-1/2 border-[1px] border-coconut_brown
            rounded p-2 pr-1 drop-shadow-lg
          ">
            No users found
          </div>
        ): null
      }
      {
        results.length > 0 && displayResults ? (
          <div className="absolute bg-sand_day w-[calc(100%+1rem)]
            left-1/2 -translate-x-1/2 border-[1px] border-coconut_brown
            rounded p-2 pr-1 drop-shadow-lg
          ">
            <div className="max-h-72 overflow-auto flex justify-around">
              {
                results.map((result, index) => {
                  return (
                    <button
                      key={`coconut-user-search-result-${index}`}
                      className="p-2 rounded border-[1px] border-coconut_brown"
                      onClick={() => {
                        setChosenUsers([result]);
                        handleSelection(result);
                        setDisplayResults(false);
                      }}
                    >
                      {result.username}
                    </button>
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
