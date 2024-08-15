import React, { useRef, useState } from "react";
// import { PageContext } from "../context/PageContext";
import { createNewShortUrlHandler } from "../lib/helper";
import TabSection from "../components/sections/TabSection";

const HomePage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [requestUrl, setRequestUrl] = useState("");
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
      className={`pageContainerDiv`}
    >
      <h1 className={`pageH1Head`}>URL Shortner</h1>
      <div
        className={`relative w-[90%] md:w-[80%] lg:w-[60%] flex flex-col p-4 rounded-lg bg-white mt-4`}
      >
        {!showMsg && (
          <form
            className={`relative w-full flex flex-col space-y-4`}
            onSubmit={onSubmitHandler}
          >
            <input
              disabled={isLoading}
              className={`relative w-full py-3 px-2 border-2 border-yellow-500 rounded-lg text-black`}
              placeholder={`Enter your full url`}
              ref={inputRef}
            />
            <button
              disabled={isLoading}
              className={`relative flex align-middle items-center py-2 px-6 rounded-md mx-auto font-semibold bg-orange-400`}
              onClick={onSubmitHandler}
            >
              {isLoading && (
                <div
                  className={`relative flex flex-row space-x-1 align-middle items-center`}
                >
                  <img
                    src="/gif/loading.gif"
                    alt="icon"
                    className={`rounded-md mx-auto  h-7 w-7  bg-orange-400 fill-[white] `}
                  />
                  <span>{`Loading...`}</span>
                </div>
              )}
              {!isLoading && <span>{`Shorten URL`}</span>}
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
