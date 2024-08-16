import { useState, useContext } from "react";
import { PageContext } from "../../context/PageContext";
import { idEncryptor } from "../../lib/handler";
import {
  BASE_URL,
  TOP_100_LINKS_LIST,
  ALL_LINKS_LIST,
  SEARCH_LINKS_LIST,
} from "../../lib/helper";

import { removeRecordHandler } from "../../lib/helper";

const TabInfoSection = ({
  listIdx,
  dbId,
  listType,
  fullUrlValue,
  clickCount,
  pageTitle,
}) => {
  const {
    top100LinkList,
    setTop100LinkList,
    allLinkList,
    setAllLinkList,
    searchList,
    setSearchList,
  } = useContext(PageContext);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const removeTabInfoHandler = async () => {
    setIsLoading(true);
    setSuccess(false);
    setError(false);
    const res = await removeRecordHandler(dbId);

    if (res.status) {
      if (listType === TOP_100_LINKS_LIST) {
        let newList = [...top100LinkList];
        newList.splice(listIdx, 1);
        setTop100LinkList(newList);
      } else if (listType === ALL_LINKS_LIST) {
        let newList = [...allLinkList];
        newList.splice(listIdx, 1);
        setAllLinkList(newList);
      } else if (listType === SEARCH_LINKS_LIST) {
        let newList = [...searchList];
        newList.splice(listIdx, 1);
        setSearchList(newList);
      }
      setSuccess(true);
    } else {
      setError(false);
    }
    setIsLoading(false);
  };

  return (
    <div
      className={`relative w-full flex-col bg-gray-200 rounded-md px-3 py-2 mt-1`}
    >
      <img
        src={`/images/cross-icon.svg`}
        alt={`optoin`}
        className={`absolute -top-2 -right-3 p-[2px] rounded-full h-8 w-8 cursor-pointer hover:bg-gray-200`}
        onClick={removeTabInfoHandler}
      />
      <div className={`relative w-full`}>
        <div className={`relative w-full flex flex-col`}>
          <span className={`relative text-black font-mono font-semibold`}>
            {`Page Title:`}
          </span>
          <span className={`relative text-black`}>{pageTitle}</span>
        </div>
      </div>
      <div className={`relative w-full h-[1px] bg-black my-2`} />
      <div className={`relative w-full`}>
        <div className={`relative w-full flex flex-row space-x-3`}>
          <span
            className={`relative text-black font-mono font-semibold my-auto`}
          >
            {`Click Count:`}
          </span>
          <span className={`relative text-black text-lg font-extrabold`}>
            {clickCount}
          </span>
        </div>
      </div>
      <div className={`relative w-full h-[1px] bg-black my-2`} />
      <div className={`relative w-full flex flex-row space-x-2`}>
        <div className={`relative w-full flex flex-col`}>
          <span className={`relative text-black font-mono font-semibold`}>
            {`Full Url:`}
          </span>
          <span
            className={`relative text-black overflow-hidden whitespace-nowrap font-thin`}
          >
            {fullUrlValue}
          </span>
        </div>
        <div
          className={`relative flex flex-row space-x-2 align-middle items-center`}
        >
          <button
            className={`cursor-pointer hover:shadow-md`}
            onClick={async () => {
              await navigator.clipboard.writeText(fullUrlValue);
              alert("Url copied to clipboard!");
            }}
          >
            <img
              src="/images/copy-icon.svg"
              alt="icon"
              className={`rounded-md mx-auto  h-10 w-10 px-1 bg-white border-[1px] border-yellow-300`}
            />
          </button>
          <a
            href={fullUrlValue}
            target="_blank"
            className={`cursor-pointer hover:shadow-md`}
          >
            <img
              src="/images/newtab-icon.svg"
              alt="icon"
              className={`rounded-md mx-auto  h-10 w-10 px-1 bg-white border-[1px] border-yellow-300`}
            />
          </a>
        </div>
      </div>
      <div className={`relative w-full h-[1px] bg-black my-2`} />
      <div className={`relative w-full flex flex-row space-x-2`}>
        <div className={`relative w-full flex flex-col`}>
          <span className={`relative text-black font-mono font-semibold`}>
            {`Short Url Redirector:`}
          </span>
          <span
            className={`relative overflow-hidden whitespace-nowrap font-thin text-blue-700`}
          >
            {`Copy/Redirect to the short url`}
          </span>
        </div>
        <div
          className={`relative flex flex-row space-x-2 align-middle items-center`}
        >
          <button
            className={`cursor-pointer hover:shadow-md`}
            onClick={async () => {
              const eId = idEncryptor(dbId);
              if (!eId) {
                alert("Invalid request!");
                return;
              }

              const shortUrl = `${BASE_URL}/${eId}`;
              await navigator.clipboard.writeText(shortUrl);
              alert("Short Url copied to clipboard!");
            }}
          >
            <img
              src="/images/copy-icon.svg"
              alt="icon"
              className={`rounded-md mx-auto  h-10 w-10 px-1 bg-white border-[1px] border-yellow-300`}
            />
          </button>
          <button
            className={`cursor-pointer hover:shadow-md`}
            onClick={() => {
              const eId = idEncryptor(dbId);
              if (!eId) {
                alert("Invalid request!");
                return;
              }

              const shortUrl = `${BASE_URL}/${eId}`;
              window.open(shortUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <img
              src="/images/newtab-icon.svg"
              alt="icon"
              className={`rounded-md mx-auto  h-10 w-10 px-1 bg-white border-[1px] border-yellow-300`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabInfoSection;
