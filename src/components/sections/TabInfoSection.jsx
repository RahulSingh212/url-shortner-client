import { idEncryptor } from "../../lib/handler";
import { BASE_URL } from "../../lib/helper";

const TabInfoSection = ({ dbId, fullUrlValue, clickCount, pageTitle }) => {
  const copyBtnHandler = async () => {
    const eId = idEncryptor(dbId);
    if (!eId) {
      alert("Invalid request!");
      return;
    }

    const shortUrl = `${BASE_URL}/${eId}`;
  };

  return (
    <div
      className={`relative w-full flex-col bg-gray-200 rounded-md px-3 py-2 mt-1`}
    >
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
              window.open(shortUrl, '_blank', 'noopener,noreferrer');
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
