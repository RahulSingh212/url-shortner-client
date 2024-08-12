import React, { useRef, useState } from "react";

const SearchUrl = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const inputRef = useRef(null);

  const onChangeHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={`pageContainerDiv`}>
      <h1 className={`pageH1Head`}>Search Url</h1>
      <div className={`pageMainDiv`}>
        <div className={`relative w-full flex flex-row space-x-2`}>
          <input
            disabled={isLoading}
            className={`relative w-full py-3 px-2 border-2 border-yellow-500 rounded-lg text-black`}
            placeholder={`Enter the name of the url`}
            ref={inputRef}
            onChange={onChangeHandler}
          />
          <button
            disabled={isLoading}
            className={`relative flex align-middle items-center py-2 px-6 rounded-md mx-auto font-semibold bg-orange-400`}
            onClick={onChangeHandler}
          >
            {isLoading && (
              <div
                className={`relative flex flex-row align-middle items-center`}
              >
                <img
                  src="/gif/loading.gif"
                  alt="icon"
                  className={`rounded-md mx-auto  h-7 w-7  bg-orange-400 fill-[white] `}
                />
              </div>
            )}
            {!isLoading && (
              <div
                className={`relative flex flex-row align-middle items-center`}
              >
                <img
                  src="/images/search-icon.svg"
                  alt="icon"
                  className={`rounded-md mx-auto  h-7 w-7 fill-[white] `}
                />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchUrl;
