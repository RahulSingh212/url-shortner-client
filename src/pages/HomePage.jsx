import React, { useRef, useState } from "react";
// import { PageContext } from "../context/PageContext";
import { createNewShortUrlHandler } from "../lib/helper";

const HomePage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [requestUrl, setRequestUrl] = useState("https://staybook.in/");
  const [shortCode, setShortCode] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const inputRef = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const full_url = inputRef.current.value + "";
    setRequestUrl(full_url);
    setIsLoading(true);
    setSuccess(false);
    setSuccess(false);
    setShowMsg(false);
    const res = await createNewShortUrlHandler(full_url);

    setIsLoading(false);
    if (res.status) {
      setResponseMsg(res.message);
      setShortCode(res.shortCode);
      setSuccess(true);
      setError(false);
    } else {
      setResponseMsg(res.message);
      setError(true);
      setSuccess(false);
    }
    setShowMsg(true);
  };

  return (
    <div
      className={`relative w-[100%] flex flex-col h-full align-middle items-center`}
    >
      <h1 className={`relative font-serif text-3xl text-yellow-50`}>
        URL Shortner
      </h1>
      <div
        className={`relative w-full md:w-[80%] lg:w-[60%] flex flex-col p-4 rounded-lg bg-white mt-4`}
      >
        {!showMsg && (
          <form
            className={`relative w-full flex flex-col space-y-4`}
            onSubmit={onSubmitHandler}
          >
            <input
              className={`relative w-full py-3 px-2 border-2 border-yellow-500 rounded-lg text-black`}
              placeholder={`Enter your full url`}
              ref={inputRef}
            />
            <button
              className={`relative flex align-middle items-center py-2 px-6 rounded-md mx-auto font-semibold bg-orange-400`}
              onClick={onSubmitHandler}
            >
              {`Shorten URL`}
            </button>
          </form>
        )}

        {showMsg && error && (
          <div className={`relative w-full flex flex-col mt-4`}>
            <span className="relative w-full px-3 py-2 rounded-md text-black mb-3 text-center font-semibold text-lg">
              {responseMsg}
            </span>
            <div className={`relative w-full flex flex-row-reverse mt-4`}>
              <button
                className={`bg-orange-400 font-semibold rounded-md px-4 py-2 flex flex-row space-x-2 align-middle items-center`}
                onClick={() => {
                  setSuccess(false);
                  setError(false);
                  setShowMsg(false);
                  setIsLoading(false);
                }}
              >
                <img
                  src="/images/back-icon.svg"
                  alt="icon"
                  className={`rounded-md mx-auto  h-5 w-5  bg-orange-400 fill-[white] `}
                />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        )}

        {showMsg && success && (
          <div className={`relative w-full flex flex-col mt-4`}>
            <span className="relative w-full px-3 py-2 rounded-md text-black mb-3 text-center font-semibold text-lg">
              {responseMsg}
            </span>
            <TabSection heading={`Original Url`} value={requestUrl} />
            <TabSection
              heading={`Shorten Url`}
              value={`http://localhost:3000/${shortCode}`}
            />
            <div className={`relative w-full flex flex-row-reverse mt-4`}>
              <button
                className={`bg-orange-400 font-semibold rounded-md px-4 py-2 flex flex-row space-x-2 align-middle items-center`}
                onClick={() => {
                  setSuccess(false);
                  setError(false);
                  setShowMsg(false);
                  setIsLoading(false);
                }}
              >
                <img
                  src="/images/back-icon.svg"
                  alt="icon"
                  className={`rounded-md mx-auto  h-5 w-5  bg-orange-400 fill-[white] `}
                />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

const TabSection = ({ heading, value }) => {
  return (
    <div
      className={`relative w-full flex flex-row px-3 py-2 rounded-md bg-gray-200 space-x-2 mt-1`}
    >
      <div className={`relative w-full flex flex-col`}>
        <span className={`relative text-black font-mono font-semibold`}>
          {heading}:
        </span>
        <span
          className={`relative text-black overflow-hidden whitespace-nowrap font-thin`}
        >
          {value}
        </span>
      </div>
      <div
        className={`relative flex flex-row space-x-2 align-middle items-center`}
      >
        <button
          className={`cursor-pointer hover:shadow-md`}
          onClick={async () => {
            await navigator.clipboard.writeText(value);
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
          href={value}
          target="_blank"
          className={`cursor-pointer hover:shadow-md`}
        >
          <img
            src="/images/url-link-icon.svg"
            alt="icon"
            className={`rounded-md mx-auto  h-10 w-10 px-1 bg-white border-[1px] border-yellow-300`}
          />
        </a>
      </div>
    </div>
  );
};
