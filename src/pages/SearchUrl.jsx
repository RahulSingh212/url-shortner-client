import React, { useRef, useState } from "react";
import { fetchSearchedUrlLists } from "../lib/helper";
import TabInfoSection from "../components/sections/TabInfoSection";

const SearchUrl = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [responseMsg, setResponseMsg] = useState("");

  const inputRef = useRef(null);

  const submitHandler = async () => {
    const url_name = (inputRef.current.value + "").trim();

    if (url_name === "") {
      alert("Invaid search text!");
      return;
    }

    setIsLoading(true);
    setSuccess(true);
    setError(true);
    const res = await fetchSearchedUrlLists(url_name);
    setResponseMsg(res.message);

    if (res.status) {
      setSearchList(res.urls);
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
    setIsLoading(false);
    inputRef.current.value = "";
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
          />
          <div
            disabled={isLoading}
            className={`relative flex align-middle items-center py-2 px-6 rounded-md mx-auto font-semibold bg-orange-400`}
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
              <button
                className={`relative flex flex-row align-middle items-center`}
                onClick={submitHandler}
              >
                <img
                  src="/images/search-icon.svg"
                  alt="icon"
                  className={`rounded-md mx-auto  h-7 w-7 fill-[white] `}
                />
              </button>
            )}
          </div>
        </div>

        <div className={`relative w-full my-2`} />

        <div className={`relative w-full flex flex-col space-y-1`}>
          {searchList.length > 0 && (
            <div className={`relative w-full flex flex-col space-y-1`}>
              {searchList.map((urlInfo, index) => (
                <TabInfoSection
                  key={index}
                  dbId={urlInfo.id}
                  fullUrlValue={urlInfo.full_url}
                  pageTitle={urlInfo.title}
                  clickCount={urlInfo.click_count}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchUrl;
